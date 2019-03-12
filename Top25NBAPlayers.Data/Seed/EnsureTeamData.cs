using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Top25NBAPlayers.Domain;
using System.Threading.Tasks;

namespace Top25NBAPlayers.Data.Seed
{
    public static class EnsureTeamData
    {
        public static void Seed(Top25NBAPlayersContext context)
        {
            try
            {
               if (context.Teams.FirstOrDefault() == null)
                {

                    Team newTeam1 = new Team(

                                       name: "Los Angeles Lakers",
                                       logo: "https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/lal.png",
                                       greatestPlayer: "Magic Johnson",
                                       lastChampionship: 2010,
                                       championships: 16,
                                       deletedInd: 0
                                    );

                    Team newTeam2 = new Team(
                                        name: "Boston Celtics",
                                        logo: "http://content.sportslogos.net/logos/6/213/full/pphdqx7bfbbbumpehh7telq1h.png",
                                        greatestPlayer: "Bill Russell",
                                        lastChampionship: 2008,
                                        championships: 17,
                                        deletedInd: 0
                                    );


                    Team newTeam3 = new Team(
                                        name: "Cleveland Cavaliers",
                                        logo: "https://pbs.twimg.com/profile_images/1092836368529719296/PdqyrDND_400x400.jpg",
                                        greatestPlayer: "Lebron James",
                                        lastChampionship: 2016,
                                        championships: 1,
                                        deletedInd: 0
                                    );

                    Team newTeam4 = new Team(
                                        name: "Miami Heat",
                                        logo: "https://wwwcache.wralsportsfan.com/asset/basketball/nba/2010/06/15/7790661/122496-heat-600x400.jpg",
                                        greatestPlayer: "Dwyane Wade",
                                        lastChampionship: 2013,
                                        championships: 3,
                                        deletedInd: 0
                                    );

                    Team newTeam5 = new Team(
                                        name: "Los Angeles Clippers",
                                        logo: "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2015%2F0616%2Fnba_ClipsLogo_1296x1296.png",
                                        greatestPlayer: "Chris Paul",
                                        lastChampionship: null,
                                        championships: 0,
                                        deletedInd: 0
                                    );

                    Team newTeam6 = new Team(
                                        name: "Milwaukee Bucks",
                                        logo: "http://www.trbimg.com/img-559ffd90/turbine/ct-high-school-logo-nba-bucks-20150710",
                                        greatestPlayer: "Kareem Abdul Jabbar",
                                        lastChampionship: 1971,
                                        championships: 1,
                                        deletedInd: 0
                                    );

                    Team newTeam7 = new Team(
                                        name: "San Antonio Spurs",
                                        logo: "http://content.sportslogos.net/logos/6/233/full/827.png",
                                        greatestPlayer: "Tim Duncan",
                                        lastChampionship: 2014,
                                        championships: 5,
                                        deletedInd: 0
                                    );

                    Team newTeam8 = new Team(
                                        name: "Houston Rockets",
                                        logo: "http://www.bbqsuperstars.com/wp-content/uploads/2013/06/HoustonRockets_PAM04a_2009_SCC_SRGB.png",
                                        greatestPlayer: "Hakeem Olajuwon",
                                        lastChampionship: 1995,
                                        championships: 2,
                                        deletedInd: 0
                                    );

                    Team[] teamsToAdd = { newTeam1, newTeam2, newTeam3, newTeam4, newTeam5, newTeam6, newTeam7, newTeam8 };
                    //Team[] teamsToAdd = { newTeam1, newTeam2 };

                    context.Teams.AddRange(teamsToAdd);

                    context.SaveChanges();

                }    
            } catch(Exception ex)
            {
                Exception sampleEx = ex;
                Console.Write(ex);
            }
        }
    }
}
