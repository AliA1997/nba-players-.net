using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Top25NBAPlayers.Domain;

namespace Top25NBAPlayers.Data.Repositories
{
    public interface IPlayerRepo
    {
        IEnumerable<Player> GetPlayers();
        IEnumerable<Player> GetDeletedPlayers();
        Player GetPlayer(Guid id);
        Task CreatePlayer(Player newPlayer);
        Task UpdatePlayer(Guid playerId, Player updatedPlayer);
        Task DeletePlayer(Guid playerId);
        Task RestorePlayer(Guid playerId);
        Task PermanentlyDeletePlayer(Guid playerId);
    }
}
