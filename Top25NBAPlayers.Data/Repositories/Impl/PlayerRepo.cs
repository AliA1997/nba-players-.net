using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Top25NBAPlayers.Domain;

namespace Top25NBAPlayers.Data.Repositories.Impl
{
    public class PlayerRepo: IPlayerRepo
    {
        //Define a private holding an instance of your context class.
        private Top25NBAPlayersContext _context;
        public PlayerRepo(Top25NBAPlayersContext context)
        {
            _context = context;
        }

        public IEnumerable<Player> GetPlayers()
        {
            return _context.Players.Where(player => player.Deleted_Ind != 1);
        }

        public IEnumerable<Player> GetDeletedPlayers()
        {
            return _context.Players.Where(player => player.Deleted_Ind == 1 && player.Permanently_Deleted_Ind != 1);
        }

        public Player GetPlayer(Guid id)
        {
            return _context.Players.FirstOrDefault(team => team.Id == id);
        }

        //import System.threading.tasks for asynchronous functions 
        public async Task CreatePlayer(Player newPlayer)
        {
            await _context.Players.AddAsync(newPlayer);
            await _context.SaveChangesAsync();
            return;
        }

        public async Task UpdatePlayer(Guid playerId, Player updatedPlayer)
        {
            updatedPlayer.Id = playerId;
            _context.Players.Update(updatedPlayer);
            await _context.SaveChangesAsync();
            return;
        }

        public async Task DeletePlayer(Guid playerId)
        {
            Player playerToDelete = await _context.Players.FirstOrDefaultAsync(player => player.Id == playerId);
            playerToDelete.Deleted_Ind = 1;
            playerToDelete.Deleted_Date = DateTime.UtcNow;
            _context.Players.Update(playerToDelete);
            await _context.SaveChangesAsync();
            return;
        }

        public async Task RestorePlayer(Guid playerId)
        {
            Player playerToRestore = await _context.Players.FirstOrDefaultAsync(player => player.Id == playerId);
            playerToRestore.Deleted_Ind = 0;
            playerToRestore.Deleted_Date = new DateTime();
            _context.Players.Update(playerToRestore);
            await _context.SaveChangesAsync();
            return;
        }

        public async Task PermanentlyDeletePlayer(Guid playerId)
        {
            Player playerToDelete = await _context.Players.FirstOrDefaultAsync(player => player.Id == playerId);
            playerToDelete.Permanently_Deleted_Ind = 1;
            _context.Players.Update(playerToDelete);
            await _context.SaveChangesAsync();
            return;
        }
    }
}
