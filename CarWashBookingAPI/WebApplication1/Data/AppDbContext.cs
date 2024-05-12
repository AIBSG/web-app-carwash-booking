using Microsoft.EntityFrameworkCore;
using CarWashBookingAPI.Models;


namespace CarWashBookingAPI.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<CarWash> CarWashes { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<Subject>  Subjects { get; set; }
        public DbSet<User> Users { get; set; }  
        public AppDbContext(DbContextOptions options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
            //Database.EnsureCreated();
        }
    }
}
