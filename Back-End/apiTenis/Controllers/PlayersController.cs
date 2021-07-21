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

        Player[] players = new Player[]
        {
            new Player {ID=Guid.Parse("baecff32-b2a0-4e01-8226-5f37047d94a7"), image="playerboy", name="Andy Murray", tara="Marea Britanie"},
            new Player { ID=Guid.Parse("bae6c9d5-2102-4d32-831e-70c893009dca"), image="playergirl", name="Simona Halep", tara="Romania"},
            new Player { ID=Guid.Parse("c51cfada-f4ff-47b4-ae1b-a1572541f422"), image="playerboy", name="Roger Federer", tara="Elvetia" },
            new Player { ID=Guid.Parse("09d73e15-7b68-4d68-98bf-a0b347e5a078"), image="playergirl", name="Serena Williams", tara="SUA" },
            new Player { ID=Guid.Parse("d6bbf5e5-b013-47e0-8a2d-5d1004f9f5ac"), image="playerboy", name="Novak Đoković", tara="Serbia"},
            new Player {ID=Guid.Parse("1ee090f9-dba1-41cf-9694-beb2c1dd0782"), image="playergirl", name="Sofia Kenin", tara="SUA"},
            new Player {ID=Guid.Parse("de8438b3-01d3-45c8-b600-5709654c79cd"), image="playerboy", name="Stefanos Tsitsipas", tara="Grecia"}
        };

        PlayerDetails[] details = new PlayerDetails[] {
            new PlayerDetails {ID=Guid.Parse("baecff32-b2a0-4e01-8226-5f37047d94a7"), image="playerboy", name="Andy Murray", tara="Marea Britanie",
            height="1.91m",age="34 ani", data_nasterii="15 mai 1987",locul_nasterii="Glasgow, Scotia",antrenor="Jamie Delgado",clasament="104",
            instagram="https://www.instagram.com/andymurray/",facebook="https://www.facebook.com/andymurrayofficial/",
            twitee="https://twitter.com/andy_murray"},
            new PlayerDetails { ID=Guid.Parse("bae6c9d5-2102-4d32-831e-70c893009dca"), image="playergirl", name="Simona Halep", tara="Romania",
            height="1.68m",age="29 ani",data_nasterii="27 septembrie 1991",locul_nasterii="Constanta, Romania",antrenor="Darren Cahill",clasament="10",
            instagram="https://www.instagram.com/simonahalep/",facebook="https://ro-ro.facebook.com/simonahalep",
            twitee="https://twitter.com/simona_halep"},
            new PlayerDetails {ID=Guid.Parse("c51cfada-f4ff-47b4-ae1b-a1572541f422"), image="playerboy", name="Roger Federer", tara="Elvetia",
            height="1.85m",age="39 ani",data_nasterii="08 august 1981",locul_nasterii="Basel, Elvetia",antrenor="Ivan Ljubicic",clasament="9",
            instagram="https://www.instagram.com/rogerfederer/",facebook="https://www.facebook.com/Federer",
            twitee="https://twitter.com/rogerfederer"},
            new PlayerDetails {ID=Guid.Parse("09d73e15-7b68-4d68-98bf-a0b347e5a078"), image="playergirl", name="Serena Williams", tara="SUA",
            height="1.75m",age="39 ani",data_nasterii="26 septembrie 1981",locul_nasterii="Saginaw, MI, USA",antrenor="Patrick Mouratoglou",clasament="16",
            instagram="https://www.instagram.com/serenawilliams/",facebook="https://www.facebook.com/SerenaWilliams",
            twitee="https://twitter.com/serenawilliams"},
            new PlayerDetails { ID=Guid.Parse("d6bbf5e5-b013-47e0-8a2d-5d1004f9f5ac"), image="playerboy", name="Novak Đoković", tara="Serbia",
            height="1.88m",age="34",data_nasterii="22 mai 1987",locul_nasterii="Belgrade, Serbia",antrenor="Marian Vajda",clasament="1",
            instagram="https://www.instagram.com/djokernole/",facebook="https://www.facebook.com/djokovicofficial/",
            twitee="https://twitter.com/djokernole"},
            new PlayerDetails {ID=Guid.Parse("1ee090f9-dba1-41cf-9694-beb2c1dd0782"), image="playergirl", name="Sofia Kenin", tara="SUA",
            height="1.70m",age="22",data_nasterii="14 noiembrie 1998",locul_nasterii="Moscow, Rusia",antrenor="Alex Kenin",clasament="4",
            instagram="https://www.instagram.com/sofia.kenin/",facebook="https://www.facebook.com/SofiaKenin",
            twitee="https://twitter.com/sofiakenin"},
            new PlayerDetails {ID=Guid.Parse("de8438b3-01d3-45c8-b600-5709654c79cd"), image="playerboy", name="Stefanos Tsitsipas", tara="Grecia",
            height="1.93m",age="22",data_nasterii="12 august 1998",locul_nasterii="Athens, Grecia",antrenor="Apostolos Tsitsipas",clasament="4",
            instagram="https://www.instagram.com/stefanostsitsipas98/",facebook="https://www.facebook.com/StefTsitsipas",
            twitee="https://twitter.com/steftsitsipas"}
        };

        [Route("/players")]
        public IEnumerable<Player> GetAllPlayers()
        {
            return players;
        }

        [Route("/players/{id}")]
        public PlayerDetails GetPlayer(Guid id)
        {
            return details.FirstOrDefault(p => p.ID == id);
        }
    }
}
