using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Session;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Top25NBAPlayers.Services.ViewModels;
using Top25NBAPlayers.Services.Services;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;

namespace Top25NBAPlayers.Web.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IMemoryCache _memoryCache;
        private readonly IAccountService _accountService;
        private readonly byte[] salt;
        public AccountController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache, IAccountService accountService)
        {
            _accountService = accountService;
            _memoryCache = memoryCache;
            _httpContextAccessor = httpContextAccessor;
            //Set the salt for your hashing algorithms
            salt = new byte[128 / 8];
        }
        
        [HttpGet("index")]
        public IActionResult GetResults()
        {
            return Ok("Account Results.");
        }

        /*
        public IActionResult Index()
        {
            //Get cookie from http context.
            string cookieFromContext = _httpContextAccessor.HttpContext.Request.Cookies["Key"];
            //Read cookie from request object.
            string cookieValueFromReq = Request.Cookies["Key"];
            //Set key value in cookie
            Set(100000);
            //Removing key from cookie
            Remove("kay");
            return Ok();
        }

        //Get the cookie value
        public string Get(string key)
        {
            return Request.Cookies[key];
        }
        */

        // GET: api/Account
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel loginForm)

        {
            var user = await _accountService.LoginAttempt(loginForm.DisplayName, loginForm.Password);
            if (user.DisplayName != null)
            {
                try
                {
                    CookieOptions option = Set(1000);
                    //Use a using statement to get the bytes of the random numbers generated.
                    //Will generate a secure prng 128 bit salt.
                    using (var rng = RandomNumberGenerator.Create())
                    {
                        rng.GetBytes(salt);
                    }
                    //I will hash the user's display name, then use teh sale, the hashing algorithm, iteration count, and number of bytes requested from the result.
                    string hashedDisplayName = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                            password: user.DisplayName,
                            salt: salt,
                            prf: KeyDerivationPrf.HMACSHA1,
                            iterationCount: 10000,
                            numBytesRequested: 256 / 8
                        ));

                    Response.Cookies.Append("user", hashedDisplayName, option);
                } catch(Exception ex)
                {


                    Console.WriteLine(ex);

                }
                return Ok(user);

            }
            return NotFound("User not found!");
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            string message = Remove("user");
            return Ok(message);
        }
        
       //Remove key from cookie 
        public string Remove(string key)
        {
            Response.Cookies.Delete(key);
            if (key == "user")
                return "Logged out successfully!";

            return $"{key} deleted from session!";
        }
    
        
        //Set the cookie value.
        public CookieOptions Set(int? expireTime)
        {
            CookieOptions option = new CookieOptions();

            if (expireTime.HasValue)
                option.Expires = DateTime.Now.AddMinutes(expireTime.Value);
            else
                option.Expires = DateTime.Now.AddMilliseconds(20);

            return option;
        }

    }
}
