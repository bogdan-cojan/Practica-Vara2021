using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace apiTenis.Models
{
    public class PlayerRepository : IPlayerRepository
    {
        private string connectionString;
        public PlayerRepository()
        {
            connectionString = @"User ID=sa;password=b;Initial Catalog=sqlDatabase;Data Source=localhost\SQLEXPRESS;";
        }

        public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(connectionString);
            }
        }

        public IEnumerable<Player> GetAllPlayers()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = @"select id,sex,nume,tara,clasament from playersTable";
                dbConnection.Open();
                return dbConnection.Query<Player>(sQuery);
            }
        }

        public Player GetById(Guid Id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = @"select * from playersTable where id=@Id";
                dbConnection.Open();
                return dbConnection.Query<Player>(sQuery, new { Id }).FirstOrDefault();
            }
        }

        public void Delete(Guid Id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = @"delete from playersTable where id=@Id";
                dbConnection.Open();
                dbConnection.Execute(sQuery, new { Id });
            }
        }

        public void Add(Player player)
        {

            using (IDbConnection dbConnection = Connection)
            {
                Guid g = Guid.NewGuid();
                var parameters = new { ID = g, Sex = player.sex, Nume = player.nume, Tara = player.tara, Height = player.height, Age = player.age, Data = player.data_nasterii, Locul = player.locul_nasterii, Antrenor = player.antrenor, Clasament = player.clasament, Insta = player.instagram, Facebook = player.facebook, Twitter = player.twitter  };
                string sQuery = @"insert into playersTable (id,sex,nume,tara,height,age,data_nasterii,locul_nasterii,antrenor,clasament,instagram,facebook,twitter) values(@ID,@Sex,@Nume,@Tara,@Height,@Age,@Data,@Locul,@Antrenor,@Clasament,@Insta,@Facebook,@Twitter)";
                dbConnection.Open();
                dbConnection.Execute(sQuery, parameters);
            }
        }

        public void Update(Guid Id, Player player)
        {
            using (IDbConnection dbConnection = Connection)
            {
                var parameters = new { Age = player.age, Antrenor = player.antrenor, Clasament = player.clasament, ID = Id };
                string sQuery = @"update playersTable set age=@Age,antrenor=@Antrenor,clasament=@Clasament where id=@ID";
                dbConnection.Open();
                dbConnection.Query(sQuery, parameters);
            }
        }

    }
}
