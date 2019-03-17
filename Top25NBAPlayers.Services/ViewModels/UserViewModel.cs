using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Top25NBAPlayers.Services.ViewModels
{
    public class UserViewModel
    {
        public Guid Id { get; set; }
        public string Avatar { get; set; }
        public string DisplayName { get; set; }
        public ISession UserSession { get; set; }
    }
}
