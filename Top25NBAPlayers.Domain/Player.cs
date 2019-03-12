using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Top25NBAPlayers.Domain
{
    //Have your Player class inherit the id and deleted_ind from the Entity abstract class.
    public class Player: Entity
    {
        private Player() { }

        public Player(string name, string avatar, int jerseyNumber, Guid teamId, int mvps, int allstars, int championships, 
                      double seasonPoints, double seasonAssists, double seasonRebounds, double seasonFieldGoalPercentage, int? deletedInd)
        {
            Name = name;
            Avatar = avatar;
            JerseyNumber = jerseyNumber;
            TeamId = teamId;
            Mvps = mvps;
            AllStars = allstars;
            Championships = championships;
            SeasonPoints = seasonPoints;
            SeasonAssists = seasonAssists;
            SeasonRebounds = seasonRebounds;
            SeasonFieldGoalPercentage = seasonFieldGoalPercentage;
            if (deletedInd != null && deletedInd != 0)
                Deleted_Ind = 1;
            else
                Deleted_Ind = 0;
        }

        public string Name { get; set; }

        public string Avatar { get; set; }

        public int JerseyNumber { get; set; }
        //Have a foriegnkey
        [ForeignKey("Teams")]
        public Guid TeamId { get; set; }
           
        public int Mvps { get; set; }

        public int AllStars { get; set; }

        public int Championships { get; set; }

        public double SeasonPoints { get; set; }

        public double SeasonAssists { get; set; }

        public double SeasonRebounds { get; set; }

        public double SeasonFieldGoalPercentage { get; set; }

    }
}
