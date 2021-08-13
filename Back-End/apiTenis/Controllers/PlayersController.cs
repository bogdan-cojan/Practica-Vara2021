using apiTenis.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace apiTenis.Controllers
{
    public class PlayersController : ControllerBase
    {
        private readonly IPlayerRepository playerRepository;

        public PlayersController(IPlayerRepository repository)
        {
            playerRepository = repository;
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

        [Route("/players")]
        [HttpPost]
        public void Post([FromBody]Player player)
        {
             playerRepository.Add(player);
        }

        [Route("/players/{id}")]
        [HttpPatch]
        public void Patch(Guid Id,[FromBody] Player player)
        {
             playerRepository.Update(Id,player);
        }

    }
}
