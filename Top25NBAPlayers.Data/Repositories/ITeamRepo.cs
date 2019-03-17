using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Top25NBAPlayers.Domain;

namespace Top25NBAPlayers.Data.Repositories
{
    public interface ITeamRepo
    {
        IEnumerable<Team> GetTeams();
        IEnumerable<Team> GetDeletedTeams();
        Team GetTeam(Guid id);
        Guid GetTeamIdByName(string team);
        Task CreateTeam(Team newTeam);
        Task UpdateTeam(Guid teamId, Team updatedTeam);
        Task DeleteTeam(Guid teamId);
        Task RestoreTeam(Guid teamId);
        Task PermanentlyDeleteTeam(Guid teamId);
    }
}
