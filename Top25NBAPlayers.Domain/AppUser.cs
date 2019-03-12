using System;
using System.Collections.Generic;
using System.Text;

namespace Top25NBAPlayers.Domain
{
    public class AppUser : Entity
    {
        private AppUser() { }

        public AppUser(string displayName, string password, int? deletedInd)
        {
            DisplayName = displayName;
            Password = password;
            if (deletedInd != null)
                Deleted_Ind = 1;
        }

        public string Password { get; set; }
        public string DisplayName { get; set; }
    }
}
