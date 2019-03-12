using Microsoft.EntityFrameworkCore;
using System;
using Top25NBAPlayers.Domain;

namespace Top25NBAPlayers.Data
{   
    //Define your Context class responsible for retrieving data from the database.
    public class Top25NBAPlayersContext : DbContext
    {
        //Define a constructor that uses the parent's constructor and pass new instance of db context options.
        public Top25NBAPlayersContext(DbContextOptions<Top25NBAPlayersContext> options) : base(options)
        { }

        //Define your table which will use a domain class for columns.
        public DbSet<Player> Players { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<AppUser> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);

        }
    }
}
