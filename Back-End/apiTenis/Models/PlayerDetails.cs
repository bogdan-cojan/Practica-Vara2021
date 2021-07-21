using System;

namespace apiTenis.Controllers
{
    public class PlayerDetails
    {
        public Guid ID { get; set; }
        public string image { get; set; }
        public string name { get; set; }
        public string tara { get; set; }
        public string height { get; set; }
        public string age { get; set; }
        public string data_nasterii { get; set; }
        public string locul_nasterii { get; set; }
        public string antrenor { get; set; }
        public string clasament { get; set; }
        public string instagram { get; set; }
        public string facebook { get; set; }
        public string twitee { get; set; }
    }
}