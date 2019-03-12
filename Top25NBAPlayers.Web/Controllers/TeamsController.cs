using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Top25NBAPlayers.Services.Services;
using Top25NBAPlayers.Services.ViewModels;

namespace Top25NBAPlayers.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {
        private readonly ITeamService _teamService;

        public TeamsController(ITeamService teamService)
        {
            _teamService = teamService;
        }

        [HttpGet]
        public IActionResult GetTeams()
        {
            List<TeamItemViewModel> teams = _teamService.GetTeams();
            return Ok(teams);
        }


        [HttpGet("{id}")]
        public IActionResult GetTeam(Guid id)
        {
            TeamViewModel team = _teamService.GetTeam(id);
            return Ok(team);
        }

        [HttpPost]
        public async Task<IActionResult> PostTeam([FromBody] TeamViewModel teamToCreate)
        {
            string createdMessage = await _teamService.CreateTeam(teamToCreate);
            return Created("/teams", createdMessage);
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> PutTeam(Guid id, [FromBody] TeamViewModel teamToUpdate)
        {
            string updatedMessage = await _teamService.UpdateTeam(id, teamToUpdate);
            return Ok(updatedMessage);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeam(Guid id)
        {
            string deletedMessage = await _teamService.DeleteTeam(id);
            return Ok(deletedMessage);
        }

    }
}
