using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiTenis.Models
{
    public interface IPlayerRepository
    {
        public IEnumerable<Player> GetAllPlayers();
        public Player GetById(Guid Id);
        public void Delete(Guid Id);
        public void Add(Player player);
        public void Update(Guid Id, Player player);
    }
}
