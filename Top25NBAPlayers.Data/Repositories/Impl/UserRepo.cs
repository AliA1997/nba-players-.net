using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Top25NBAPlayers.Domain;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Top25NBAPlayers.Data.Repositories.Impl
{
    public class UserRepo : IUserRepo
    {

        private readonly Top25NBAPlayersContext _context;
        public UserRepo(Top25NBAPlayersContext context)
        {
            _context = context;
        }

        public async Task<AppUser> GetUser(string displayName, string password)
        {
            var userToReturn = await _context.Users.FirstOrDefaultAsync(user => user.DisplayName == displayName && user.Password == password && user.Deleted_Ind == 0);
            return userToReturn;
        } 
    }
}
