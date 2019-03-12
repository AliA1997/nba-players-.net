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
            return _context.Players;
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
            _context.Players.Remove(playerToDelete);
            await _context.SaveChangesAsync();
            return;
        }
    }
}
