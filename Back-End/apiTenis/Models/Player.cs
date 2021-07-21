using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiTenis.Models
{
    public class Player
    {
        public Guid ID { get; set; }
        public string image { get; set; }
        public string name { get; set; }
        public string tara { get; set; }
    }
}
