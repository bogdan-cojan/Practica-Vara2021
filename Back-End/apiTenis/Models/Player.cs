using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiTenis.Models
{
    public class Player
    {
        public Guid ID { get; set; }
        public string sex { get; set; }
        public string nume { get; set; }
        public string tara { get; set; }
        public string height { get; set; }
        public string age { get; set; }
        public string data_nasterii { get; set; }
        public string locul_nasterii { get; set; }
        public string antrenor { get; set; }
        public string clasament { get; set; }
        public string instagram { get; set; }
        public string facebook { get; set; }
        public string twitter { get; set; }
    }
}
