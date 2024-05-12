using CarWashBookingAPI.Models;

namespace CarWashBookingAPI.Services.Interfaces
{
    public interface IClientOrdersServece
    {
        public Task<List<Order>> GetOrdersByClient(Guid userId);
        public Task<List<Order>> GetAllOrdersToClientOrder (DateTime date, DateTime startTime, string serviceName);
        public Task<List<Order>> ViewСonvenientOrdersToClient(DateTime startTime, Service service);
    }
}
