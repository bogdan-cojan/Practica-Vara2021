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
        Mock<IPlayerRepository> playerRepository = new Mock<IPlayerRepository>();

        [Fact]
        public void GetListTest()
        {
            // Arange
            var player = new List<Player>() { new Player() { nume="Bogdan" } };
            playerRepository.Setup(foo => foo.GetAllPlayers()).Returns(player);
            var controller = new PlayersController(playerRepository.Object);

            // Act
            var response = controller.GetList().ToList();

            // Assert
            Assert.Equal(player.Count,response.Count);
        }

        [Fact]
        public void GetInfoTest()
        { 
            // Arange
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
            var guid = new Guid("a24d4a6c-abbc-40d9-b4af-55e626a1ef75");
            playerRepository.Setup(mock => mock.Delete(guid));

            // Act
            PlayersController controller = new PlayersController(playerRepository.Object);
            controller.DeletePlayer(guid);

            // Assert
            playerRepository.Verify(mock => mock.Delete(guid), Times.Once());
            playerRepository.VerifyAll();
        }

        [Fact]
        public void PostTest()
        {
            // Arange
            var guid = new Guid("a24d4a6c-abbc-40d9-b4af-55e626a1ef75");
            Player player = new Player{ ID = guid, nume = "Bogdan", tara = "Franta" };
            playerRepository.Setup(mock => mock.Add(player));

            // Act
            PlayersController controller = new PlayersController(playerRepository.Object);
            controller.Post(player);

            // Assert
            playerRepository.Verify(mock => mock.Add(player), Times.Once());
            playerRepository.VerifyAll();
        }

        [Fact]
        public void PatchTest()
        {
            // Arange
            var guid = new Guid("a24d4a6c-abbc-40d9-b4af-55e626a1ef75");
            Player player = new Player { ID = guid, nume = "Bogdan", tara = "Franta" };
            playerRepository.Setup(mock => mock.Update(guid, player));

            // Act
            PlayersController controller = new PlayersController(playerRepository.Object);
            controller.Patch(guid, player);

            // Assert
            playerRepository.Verify(mock => mock.Update(guid, player), Times.Once());
            playerRepository.VerifyAll();
        }
    }
}
