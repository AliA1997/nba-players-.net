using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Top25NBAPlayers.Data.Repositories;
using Top25NBAPlayers.Services.ViewModels;
using Top25NBAPlayers.Services.Factory;
using Top25NBAPlayers.Domain;
using System.Threading.Tasks;

namespace Top25NBAPlayers.Services.Services.Impl
{
    public class TeamService: ITeamService
    {
        private readonly ITeamRepo _repo;
        public TeamService(ITeamRepo repo)
        {
            _repo = repo;
        }

        public List<TeamItemViewModel> GetTeams()
        {
            List<TeamItemViewModel> teamsToReturn = _repo.GetTeams()
                                                        .Select(team => ModelFactory.CreateViewModel(
                                                                                           teamId: team.Id,
                                                                                           name: team.Name,
                                                                                           logo: team.Logo,
                                                                                           greatestPlayer: team.GreatestPlayer,
                                                                                           deleted_date: null
                                                                                    ))
                                                       .ToList();
            return teamsToReturn;
        }

        public List<TeamItemViewModel> GetDeletedTeams()
        {
            List<TeamItemViewModel> teamsToReturn = _repo.GetDeletedTeams()
                                                        .Select(team => ModelFactory.CreateViewModel(
                                                                                        teamId: team.Id,
                                                                                        name: team.Name,
                                                                                        logo: team.Logo,
                                                                                        greatestPlayer: team.GreatestPlayer,
                                                                                        deleted_date: team.Deleted_Date
                                                                                    ))
                                                         .ToList();
            return teamsToReturn;
        }

        public TeamViewModel GetTeam(Guid id)
        {
            Team teamToReturn = _repo.GetTeam(id);
            return ModelFactory.CreateViewModel(teamToReturn);
        }

        //import System.threading.tasks for asynchronous functions 
        public async Task<string> CreateTeam(TeamViewModel newTeam)
        {

            Team teamToCreate = ModelFactory.CreateDomainModel(newTeam);
            await _repo.CreateTeam(teamToCreate);
            return "New Team created!";
        }

        public async Task<string> UpdateTeam(Guid teamId, TeamViewModel updatedTeam)
        {
            Team teamToUpdate = ModelFactory.CreateDomainModel(updatedTeam);
            await _repo.UpdateTeam(teamId, teamToUpdate);
            return $"{updatedTeam.Id} has been updated!";
        }

        public async Task<string> DeleteTeam(Guid teamId)
        {
            await _repo.DeleteTeam(teamId);
            return $"{teamId} has been deleted!";
        }

        public async Task<string> RestoreTeam(Guid teamId)
        {
            await _repo.RestoreTeam(teamId);
            return $"{teamId} has been restored!";
        }

        public async Task<string> PermanentlyDeleteTeam(Guid teamId)
        {
            await _repo.PermanentlyDeleteTeam(teamId);
            return $"{teamId} has been deleted!";
        }
    }
}
