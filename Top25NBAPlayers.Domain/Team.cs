using System;
using System.Collections.Generic;
using System.Text;

namespace Top25NBAPlayers.Domain
{
    //Have your Team class inherit the id and deleted_ind from the Entity abstract class.
    public class Team :Entity
    {
        private Team() { }

        public Team(string name, string logo, string greatestPlayer, int? lastChampionship, int championships, int? deletedInd)
        {
            Name = name;
            Logo = logo;
            GreatestPlayer = greatestPlayer;
            if(lastChampionship != null) 
                LastChampionship = lastChampionship;

            Championships = championships;
            if (deletedInd != null && deletedInd != 0)
                Deleted_Ind = 1;
            else
                Deleted_Ind = 0;
        }

        public string Name { get; set; }
        public string Logo { get; set; }
        public string GreatestPlayer { get; set; }
        public int? LastChampionship { get; set; }
        public int Championships { get; set; }
    }
}
