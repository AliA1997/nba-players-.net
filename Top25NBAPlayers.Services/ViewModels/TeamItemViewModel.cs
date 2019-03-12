using System;
using System.Collections.Generic;
using System.Text;

namespace Top25NBAPlayers.Services.ViewModels
{
    public class TeamItemViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Logo { get; set; }
        public string GreatestPlayer { get; set; }
    }
}
