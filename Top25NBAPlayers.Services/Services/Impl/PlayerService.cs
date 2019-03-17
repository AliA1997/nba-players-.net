using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Top25NBAPlayers.Domain;
using Top25NBAPlayers.Services.Factory;
using Top25NBAPlayers.Services.ViewModels;
using Top25NBAPlayers.Data.Repositories;
using System.Threading.Tasks;

namespace Top25NBAPlayers.Services.Services.Impl
{
    public class PlayerService: IPlayerService
    {
        private readonly IPlayerRepo _repo;
        private readonly ITeamRepo _teamRepo;
        public PlayerService(IPlayerRepo repo, ITeamRepo teamRepo)
        {
            _repo = repo;
            _teamRepo = teamRepo;
        }
         
        public List<PlayerItemViewModel> GetPlayers()
        {
            List<PlayerItemViewModel> playersToReturn = _repo.GetPlayers()
                                                                .Select(player => {
                                                                    string team = _teamRepo.GetTeam(player.TeamId).Name;
                                                                    return ModelFactory.CreateViewModel(player, team, null);
                                                                })
                                                                .ToList();
            return playersToReturn;
        }

        public List<PlayerItemViewModel> GetDeletedPlayers()
        {
            List<PlayerItemViewModel> playersToReturn = _repo.GetDeletedPlayers()
                                                            .Select(player =>
                                                            {
                                                                string team = _teamRepo.GetTeam(player.TeamId).Name;
                                                                return ModelFactory.CreateViewModel(player, team, player.Deleted_Date);
                                                            })
                                                            .ToList();
            return playersToReturn; 
        }

        public PlayerViewModel GetPlayer(Guid id)
        {
            Player playerToConvert = _repo.GetPlayer(id);
            string team = _teamRepo.GetTeam(playerToConvert.TeamId).Name;
            PlayerViewModel playerToReturn = ModelFactory.CreateViewModel(playerToConvert);
            playerToReturn.Team = team;
            return playerToReturn;
        }

        //import System.threading.tasks for asynchronous functions 
        public async Task<string> CreatePlayer(PlayerViewModel newPlayer)
        {
            Guid teamId = _teamRepo.GetTeamIdByName(newPlayer.Team);
            Player playerToCreate = ModelFactory.CreateDomainModel(newPlayer, teamId);
            await _repo.CreatePlayer(playerToCreate);
            return "New Player created!";
        }

        public async Task<string> UpdatePlayer(Guid playerId, PlayerViewModel updatedPlayer)
        {
            Guid teamId = _teamRepo.GetTeamIdByName(updatedPlayer.Team);
            Player playerToUpdate = ModelFactory.CreateDomainModel(updatedPlayer, teamId);
            await _repo.UpdatePlayer(playerId, playerToUpdate);
            return $"{updatedPlayer.Id} has been updated!";
        }

        public async Task<string> DeletePlayer(Guid playerId)
        {
            await _repo.DeletePlayer(playerId);
            return $"{playerId} has been deleted!";
        }

        public async Task<string> RestorePlayer(Guid playerId)
        {
            await _repo.RestorePlayer(playerId);
            return $"{playerId} has been restored!";
        }

        public async Task<string> PermanentlyDeletePlayer(Guid playerId)
        {
            await _repo.PermanentlyDeletePlayer(playerId);
            return $"{playerId} has been permanently deleted!";
        }
    }
}
