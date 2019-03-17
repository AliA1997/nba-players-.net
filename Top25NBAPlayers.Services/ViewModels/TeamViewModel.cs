using System;
using System.Collections.Generic;
using System.Text;

namespace Top25NBAPlayers.Services.ViewModels
{
    public class TeamViewModel
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Logo { get; set; }

        public string GreatestPlayer { get; set; }

        public int? LastChampionship { get; set; }

        public int Championships { get; set; }

        public DateTime Deleted_Date { get; set; }

        public DateTime Updated_Date { get; set; }
    
    }
}
