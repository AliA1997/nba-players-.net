using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Text;
using Top25NBAPlayers.Domain;

namespace Top25NBAPlayers.Data.Repositories.Impl
{
    public class TeamRepo:ITeamRepo
    {
        private Top25NBAPlayersContext _context;
        public TeamRepo(Top25NBAPlayersContext context)
        {
            _context = context;
        }

        public IEnumerable<Team> GetTeams()
        {
            return _context.Teams;
        }

        public Team GetTeam(Guid id)
        {
            return _context.Teams.FirstOrDefault(team => team.Id == id);
        }

        public Guid GetTeamIdByName(string name)
        {
            return _context.Teams.FirstOrDefault(team => team.Name == name).Id;
        }

        public async Task CreateTeam(Team newTeam)
        {
            await _context.Teams.AddAsync(newTeam);
            await _context.SaveChangesAsync();
            return;
        }

        public async Task UpdateTeam(Guid teamId, Team updatedTeam)
        {
            updatedTeam.Id = teamId;
            _context.Teams.Update(updatedTeam);
            await _context.SaveChangesAsync();
            return;
        }

        public async Task DeleteTeam(Guid teamId)
        {
            Team teamToDelete = await _context.Teams.FirstOrDefaultAsync(team => team.Id == teamId);
            _context.Teams.Remove(teamToDelete);
            await _context.SaveChangesAsync();
            return;
        }
    }
}
