using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Top25NBAPlayers.Data.Repositories;
using Top25NBAPlayers.Services.Factory;
using Top25NBAPlayers.Services.ViewModels;

namespace Top25NBAPlayers.Services.Services.Impl
{
    public class AccountService : IAccountService
    {

        private readonly IUserRepo _repo;
        public AccountService(IUserRepo repo)
        {
            _repo = repo;
        }

        public async Task<UserViewModel> LoginAttempt(string displayName, string password)
        {
            var userToConvert = await _repo.GetUser(displayName, password);
            if(userToConvert == null)
            {
                return new UserViewModel();
            }

            return ModelFactory.CreateViewModel(userToConvert);
            
        } 

    }
}
