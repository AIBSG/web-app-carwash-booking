using CarWashBookingAPI.Enums;

namespace CarWashBookingAPI.Models
{
    public class Order : BaseEntity
    {
        public CarWash CarWash { get; set; }
        public User Client { get; set; }
        public Service Service { get; set; }
        public DateTime Date { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public OrderState OrderState { get; set; }
        public int Window { get; set; }

    }
}
