using System;
using System.Collections.Generic;
using System.Text;

namespace Top25NBAPlayers.Services.ViewModels
{
    public class PlayerItemViewModel
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Avatar { get; set; }

        public int JerseyNumber { get; set; }

        public string Team { get; set; }
    }
}
