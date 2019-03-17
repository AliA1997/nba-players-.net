using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Top25NBAPlayers.Domain;

namespace Top25NBAPlayers.Data.Seed
{
    public static class EnsureUserData
    {
        public static void Seed(Top25NBAPlayersContext context)
        {
            if(context.Users.FirstOrDefault() == null)
            {
                AppUser newUser1 = new AppUser("Admin1997", "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png", "passw0rd", 0);

                AppUser newUser2 = new AppUser("Admin96", "https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png", "passw0rd", 0);

                context.Users.AddAsync(newUser1);

                context.Users.AddAsync(newUser2);

                context.SaveChangesAsync();

                return;
            }
        } 
    }
}
