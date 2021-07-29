using apiTenis.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiTenis.Controllers
{
    public class PlayersController : ControllerBase
    {
        private readonly PlayerRepository playerRepository;
               
        public PlayersController()
        {
            playerRepository = new PlayerRepository();
        }

        [Route("/players")]
        public IEnumerable<Player> GetList()
        {
            return playerRepository.GetAllPlayers();
        }

        [Route("/players/{id}")]
        public Player GetInfo(Guid Id)
        {
            return playerRepository.GetById(Id);
        }

        [Route("/players/{id}")]
        [HttpDelete]
        public void DeletePlayer(Guid Id)
        {
            playerRepository.Delete(Id);
        }

    }
}
