using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Top25NBAPlayers.Data.Migrations
{
    public partial class AddPermanentlyDeletedFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Deleted_Date",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "Permanently_Deleted_Ind",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "Deleted_Date",
                table: "Teams",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "Permanently_Deleted_Ind",
                table: "Teams",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "Deleted_Date",
                table: "Players",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "Permanently_Deleted_Ind",
                table: "Players",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Deleted_Date",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Permanently_Deleted_Ind",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Deleted_Date",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "Permanently_Deleted_Ind",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "Deleted_Date",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "Permanently_Deleted_Ind",
                table: "Players");
        }
    }
}
