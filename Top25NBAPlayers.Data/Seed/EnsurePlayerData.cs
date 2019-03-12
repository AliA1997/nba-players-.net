using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Top25NBAPlayers.Domain;

namespace Top25NBAPlayers.Data.Seed
{
    public static class EnsurePlayerData
    {
        public static void Seed(Top25NBAPlayersContext context)
        {
            //If the player's table does not contain data add data to the database.
            if(context.Players.FirstOrDefault() == null)
            {
                Player newPlayer = new Player(
                                        name: "Lebron James",
                                        avatar: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254",
                                        jerseyNumber: 23,
                                        teamId: Guid.Parse("08d6a679-7eed-bf9f-3060-d7147c4333bd"),
                                        mvps: 4,
                                        allstars: 15,
                                        championships: 3,
                                        seasonPoints: 27.1,
                                        seasonAssists: 8.1,
                                        seasonRebounds: 8.6,
                                        seasonFieldGoalPercentage: 51.3,
                                        deletedInd: null
                                    );

                Player newPlayer2 = new Player(
                                        name: "Kyrie Irving",
                                        avatar: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6442.png&w=350&h=254",
                                        jerseyNumber: 11,
                                        teamId: Guid.Parse("08d6a679-7efd-06be-d957-e8ef2c3e0a7b"),
                                        mvps: 0,
                                        allstars: 6,
                                        championships: 1,
                                        seasonPoints: 23.5,
                                        seasonAssists: 6.9,
                                        seasonRebounds: 4.9,
                                        seasonFieldGoalPercentage: 49.8,
                                        deletedInd: null
                                    );

                Player newPlayer3 = new Player(
                                        name: "Chris Paul",
                                        avatar: "https://jordansrmysole.com/wp-content/uploads/2018/01/Chris-Paul.png",
                                        jerseyNumber: 3,
                                        teamId: Guid.Parse("08d6a679-7efd-14c7-488b-cddb122995db"),
                                        mvps: 0,
                                        allstars: 9,
                                        championships: 0,
                                        seasonPoints: 15.5,
                                        seasonAssists: 8.3,
                                        seasonRebounds: 4.5,
                                        seasonFieldGoalPercentage: 41.7,
                                        deletedInd: null
                                    );

                Player newPlayer4 = new Player(
                                        name: "James Harden",
                                        avatar: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254",
                                        jerseyNumber: 13,
                                        teamId: Guid.Parse("08d6a679-7efd-14c7-488b-cddb122995db"),
                                        mvps: 1,
                                        allstars: 7,
                                        championships: 0,
                                        seasonPoints: 36.6,
                                        seasonAssists: 7.5,
                                        seasonRebounds: 6.5,
                                        seasonFieldGoalPercentage: 44.0,
                                        deletedInd: null
                                    );

                Player newPlayer5 = new Player(
                                        name: "Dwyane Wade",
                                        avatar: "https://b.fssta.com/uploads/application/nba/headshots/1135.vresize.350.425.medium.42.png",
                                        jerseyNumber: 3,
                                        teamId: Guid.Parse("08d6a679-7efd-124a-c9c5-3fb707ab3243"),
                                        mvps: 0,
                                        allstars: 13,
                                        championships: 3,
                                        seasonPoints: 14.2,
                                        seasonAssists: 4.3,
                                        seasonRebounds: 3.7,
                                        seasonFieldGoalPercentage: 43.7,
                                        deletedInd: null
                                    );

                Player newPlayer6 = new Player(
                                        name: "Giannis Antetokounmpo",
                                        avatar: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032977.png&w=350&h=254",
                                        jerseyNumber: 34,
                                        teamId: Guid.Parse("08d6a679-7efd-1383-90d7-e946d70ef236"),
                                        mvps: 0,
                                        allstars: 3,
                                        championships: 0,
                                        seasonPoints: 27.0,
                                        seasonAssists: 6.0,
                                        seasonRebounds: 12.6,
                                        seasonFieldGoalPercentage: 58.0,
                                        deletedInd: null
                                    );

                Player[] players = new[] { newPlayer, newPlayer2, newPlayer3, newPlayer4, newPlayer5, newPlayer6 };
                context.Players.AddRange(players);
                context.SaveChanges();
            }
        }
    }
}
