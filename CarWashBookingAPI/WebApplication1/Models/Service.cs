namespace CarWashBookingAPI.Models
{
    public class Service : BaseEntity
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public int Duration { get; set; }

    }
}
