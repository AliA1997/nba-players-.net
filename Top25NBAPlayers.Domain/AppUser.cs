using System;
using System.Collections.Generic;
using System.Text;

namespace Top25NBAPlayers.Domain
{
    public class AppUser : Entity
    {
        private AppUser() { }

        public AppUser(string displayName, string avatar, string password, int? deletedInd)
        {
            DisplayName = displayName;
            Avatar = avatar;
            Password = password;
            if (deletedInd != null)
                Deleted_Ind = 1;
        }

        public string DisplayName { get; set; }
        
        public string Avatar { get; set; }

        public string Password { get; set; }
    }
}
