using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Top25NBAPlayers.Data;
using Top25NBAPlayers.Data.Seed;

namespace Top25NBAPlayers.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);
            //Gonna use a using statement to get our dbCOntext and use the dbCOntext to seed data to our database.
            //Assign a variable and after the using statement is finished that variable is disposed.
            using (var scope = host.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                using(var dbContext = scope.ServiceProvider.GetRequiredService<Top25NBAPlayersContext>())
                {
                    //Update your database using your context
                    dbContext.Database.Migrate();
                }
            }

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    //And also seed your database data using your context.
                    var context = services.GetRequiredService<Top25NBAPlayersContext>();

                    EnsureTeamData.Seed(context);
                    EnsurePlayerData.Seed(context);
                }
                catch (Exception ex)
                {
                    Console.Write(ex);
                }
            }

            try
            {
                host.Run();
            } catch(Exception runException)
            {
                Console.WriteLine(runException);
            }
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
