using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Top25NBAPlayers.Services.Services;
using Top25NBAPlayers.Services.ViewModels;

namespace Top25NBAPlayers.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
        //For repositories, services, have an instance following the corresponding interface
        private readonly IPlayerService _playerService;

        public PlayersController(IPlayerService playerService, ITeamService teamService)
        {
            _playerService = playerService;
        }

        [HttpGet]
        public IActionResult GetPlayers()
        {
            List<PlayerItemViewModel> players = _playerService.GetPlayers();
            return Ok(players);
        }

        [HttpGet("deleted")]
        public IActionResult GetDeletedPlayers()
        {
            List<PlayerItemViewModel> deletedPlayers = _playerService.GetDeletedPlayers();
            return Ok(deletedPlayers);
        }

        [HttpGet("{id}")]
        public IActionResult GetPlayer(Guid id)
        {
            PlayerViewModel player = _playerService.GetPlayer(id);
            return Ok(player);
        }


        [HttpPost]
        public async Task<IActionResult> PostPlayer([FromBody] PlayerViewModel playerToCreate)
        {
            string createdMessage = await _playerService.CreatePlayer(playerToCreate);
            return Created("/players", createdMessage);
        }


        [HttpPatch("{id}")]
        public async Task<IActionResult> PutPlayer(Guid id, [FromBody] PlayerViewModel playerToUpdate)
        {
            playerToUpdate.Id = id;
            string updatedMessage = await _playerService.UpdatePlayer(id, playerToUpdate);
            return Ok(updatedMessage);
        }

        [HttpPatch("restore/{id}")]
        public async Task<IActionResult> RestorePlayer(Guid id)
        {
            string restoreMessage = await _playerService.RestorePlayer(id);
            return Ok(restoreMessage);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlayer(Guid id)
        {
            string deletedMessage = await _playerService.DeletePlayer(id);
            return Ok(deletedMessage);
        }

        [HttpDelete("permanently_delete/{id}")]
        public async Task<IActionResult> PermanentlyDeletePlayer(Guid id)
        {
            string permanentlyDeleteMessage = await _playerService.PermanentlyDeletePlayer(id);
            return Ok(permanentlyDeleteMessage);
        }
    }
}
