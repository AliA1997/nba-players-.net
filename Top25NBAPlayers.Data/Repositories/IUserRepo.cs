using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Top25NBAPlayers.Domain;

namespace Top25NBAPlayers.Data.Repositories
{
    public interface IUserRepo
    {
        Task<AppUser> GetUser(string displayName, string password);
    }
}
