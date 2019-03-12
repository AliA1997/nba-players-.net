using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Top25NBAPlayers.Data.Migrations
{
    public partial class initialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Players",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Deleted_Ind = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Avatar = table.Column<string>(nullable: true),
                    JerseyNumber = table.Column<int>(nullable: false),
                    TeamId = table.Column<Guid>(nullable: false),
                    Mvps = table.Column<int>(nullable: false),
                    AllStars = table.Column<int>(nullable: false),
                    Championships = table.Column<int>(nullable: false),
                    SeasonPoints = table.Column<double>(nullable: false),
                    SeasonAssists = table.Column<double>(nullable: false),
                    SeasonRebounds = table.Column<double>(nullable: false),
                    SeasonFieldGoalPercentage = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Players", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Teams",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Deleted_Ind = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Logo = table.Column<string>(nullable: true),
                    GreatestPlayer = table.Column<string>(nullable: true),
                    LastChampionship = table.Column<int>(nullable: true),
                    Championships = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teams", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Deleted_Ind = table.Column<int>(nullable: false),
                    Password = table.Column<string>(nullable: true),
                    DisplayName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Players");

            migrationBuilder.DropTable(
                name: "Teams");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
