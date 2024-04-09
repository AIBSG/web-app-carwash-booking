using System.Drawing;

namespace CarWashBookingAPI.Models
{
    public class CarWash : BaseEntity
    {
        public List<User> Users { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public DateTime OpeningTime { get; set; }
        public DateTime CloseingTime { get; set;}
        public int WindowsNumber { get; set; }


    }
}
