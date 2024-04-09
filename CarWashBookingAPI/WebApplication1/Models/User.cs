namespace CarWashBookingAPI.Models
{
    public class User : BaseEntity
    {
        public Subject Subject { get; set; }   
        public bool IsPartner { get; set; } 
        public string Email { get; set; }   
        public string? VKId { get; set; }
        public string? HashedPassword { get; set; }
        public int? EmailCode { get; set; }



    }
}
