using apiTenis.Controllers;
using apiTenis.Models;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace apiTenis.Tests
{
    public class PlayersControllerTests
    {
        [Fact]
        public void GetListTest()
        {
            // Arange
            var players = new List<Player>() { new Player() { nume="Bogdan" } };
            var playerRepository = new Mock<IPlayerRepository>();
            playerRepository.Setup(foo => foo.GetAllPlayers()).Returns(players);
            var controller = new PlayersController(playerRepository.Object);

            // Act
            var response = controller.GetList().ToList();

            // Assert
            Assert.Equal(players.Count,response.Count);
        }

        [Fact]
        public void GetInfoTest()
        { 
            // Arange
            var playerRepository = new Mock<IPlayerRepository>();
            var guid = new Guid("a24d4a6c-abbc-40d9-b4af-55e626a1ef75");
            playerRepository.Setup(x => x.GetById(guid))
                .Returns(new Player { ID = guid });
            var controller = new PlayersController(playerRepository.Object);

            // Act
            var response = controller.GetInfo(guid);

            // Assert
            Assert.Equal(guid, response.ID);
        }

        [Fact]
        public void DeletePlayerTest()
        {
            // Arange
            var action = new Guid("a24d4a6c-abbc-40d9-b4af-55e626a1ef75");
            Mock<IPlayerRepository> mockIPlayerRepository = new Mock<IPlayerRepository>();
            var guid = new Guid("a24d4a6c-abbc-40d9-b4af-55e626a1ef75");
            mockIPlayerRepository.Setup(mock => mock.Delete(guid));

            // Act
            PlayersController myClass = new PlayersController(mockIPlayerRepository.Object);
            myClass.DeletePlayer(action);

            // Assert
            mockIPlayerRepository.Verify(mock => mock.Delete(guid), Times.Once());
            mockIPlayerRepository.VerifyAll();
        }

        [Fact]
        public void PostTest()
        {
            // Arange
            var guid = new Guid("a24d4a6c-abbc-40d9-b4af-55e626a1ef75");
            Player player = new Player{ ID = guid, nume = "Bogdan", tara = "Franta" };
            Mock<IPlayerRepository> mockIPlayerRepository = new Mock<IPlayerRepository>();
            mockIPlayerRepository.Setup(mock => mock.Add(player));

            // Act
            PlayersController myClass = new PlayersController(mockIPlayerRepository.Object);
            myClass.Post(player);

            // Assert
            mockIPlayerRepository.Verify(mock => mock.Add(player), Times.Once());
            mockIPlayerRepository.VerifyAll();
        }

        [Fact]
        public void PatchTest()
        {
            // Arange
            var guid = new Guid("a24d4a6c-abbc-40d9-b4af-55e626a1ef75");
            Player player = new Player { ID = guid, nume = "Bogdan", tara = "Franta" };
            Mock<IPlayerRepository> mockIPlayerRepository = new Mock<IPlayerRepository>();
            mockIPlayerRepository.Setup(mock => mock.Update(guid, player));

            // Act
            PlayersController myClass = new PlayersController(mockIPlayerRepository.Object);
            myClass.Patch(guid, player);

            // Assert
            mockIPlayerRepository.Verify(mock => mock.Update(guid, player), Times.Once());
            mockIPlayerRepository.VerifyAll();
        }
    }
}
