    using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Top25NBAPlayers.Services.ViewModels;

namespace Top25NBAPlayers.Services.Services
{
    public interface IAccountService
    {
        Task<UserViewModel> LoginAttempt(string displayName, string password);
    }
}
