using System;
using System.Collections.Generic;
using System.Text;

namespace Top25NBAPlayers.Services.ViewModels
{
    public class PlayerViewModel
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Avatar { get; set; }

        public int JerseyNumber { get; set; }

        public string Team { get; set; }

        public int Mvps { get; set; }

        public int AllStars { get; set; }

        public int Championships { get; set; }

        public double SeasonPoints { get; set; }

        public double SeasonAssists { get; set; }

        public double SeasonRebounds { get; set; }

        public double SeasonFieldGoalPercentage { get; set; }   

        public DateTime Deleted_Date { get; set; }

        public DateTime Updated_Date { get; set; }

    }
}
