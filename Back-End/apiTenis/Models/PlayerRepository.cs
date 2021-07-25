using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace apiTenis.Models
{
    public class PlayerRepository
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
            using(IDbConnection dbConnection = Connection)
            {
                string sQuery = @"select id,sex,nume,tara from playersTable";
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

    }
}
