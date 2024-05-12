using CarWashBookingAPI.Models;
using CarWashBookingAPI.Data;
using CarWashBookingAPI.Services.Interfaces;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace CarWashBookingAPI.Services.Implementations
{
    public class ClientOrdersService : IClientOrdersServece
    {
        private readonly AppDbContext _context;
        private readonly int _infelicity = 10; //время в минутах на которое может заезжать бронь на другую бронь 
        private readonly int _circle = 3; //число часов в пределах которго будут смотреться брони для проверки совместимоти (3 часа в обе стороны)
        public Service ServiceInfo { get; private set; }

        public ClientOrdersService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<Service> GetServiceInfo(string serviceName)
        {
            var seviceInfo = await _context.Services.Where(x => x.Name.Equals(serviceName)).FirstOrDefaultAsync();
            ServiceInfo = seviceInfo;
            return seviceInfo;
        }
        public async Task<List<Order>> GetOrdersByClient(Guid userId);
        public async Task<List<Order>> GetAllOrdersToClientOrder(DateOnly date, DateTime startTime, Service service)
        {
            var ordersToСalculations = await _context.Orders
                .Include(x => x.CarWash)
                .Include(x => x.Service)
                .Where(x => x.Service.Id.Equals(service) && x.Date.Equals(date) &&(x.StartTime <= startTime.AddHours(_circle) || x.StartTime >= startTime.AddHours(-_circle)))
                .ToListAsync();
            return ordersToСalculations;
        }

        public async Task<List<CarWash>> GetListCarWashesWithService()
        public async Task<List<Order>> ViewСonvenientOrders(DateTime startTime, List<Order> allOrders, Service serviceInfo, DateOnly date)
        {
            var result = new List<Order>();
            var allCarWashesWithService = await _context.CarWashes.Include(x => x.Services).Where(x => x.Services.Any(s => s.Name.Equals(serviceInfo.Name))).ToListAsync();
            var ordersDicByCarWashAndWindows = GetOrdersByCarWashesDic(allOrders, allCarWashesWithService);

            foreach(var carWashOrders in ordersDicByCarWashAndWindows)
            {
                foreach (var windowOrders in carWashOrders.Value)
                {
                    if (windowOrders.Value.Count == 0)
                    {
                        result.Add(new Order
                        {
                            Id = Guid.NewGuid(),
                            CarWash = carWashOrders.Key,
                            Service = serviceInfo,
                            Client = null,
                            Date = date,
                            StartTime = startTime,
                            EndTime = startTime.AddMinutes(serviceInfo.Duration),
                            OrderState = Enums.OrderState.WaitingConfirmation,
                            Window = windowOrders.Key
                        });
                        break;
                    }
                    else 
                        continue;
                }

                foreach(var windowOrders in carWashOrders.Value)
                {
                    foreach (var leftOrder in windowOrders.Value)
                    {
                        if (leftOrder.EndTime.AddMinutes(-_infelicity) <= startTime)
                        {
                            foreach (var rightOrder in windowOrders.Value)
                            {
                                if (rightOrder.StartTime.AddMinutes(_infelicity) >= startTime.AddMinutes(serviceInfo.Duration))
                                {
                                    result.Add(new Order
                                    {
                                        Id = Guid.NewGuid(),
                                        CarWash = carWashOrders.Key,
                                        Service = serviceInfo,
                                        Client = null,
                                        Date = date,
                                        StartTime = startTime,
                                        EndTime = startTime.AddMinutes(serviceInfo.Duration),
                                        OrderState = Enums.OrderState.WaitingConfirmation,
                                        Window = windowOrders.Key
                                    });
                                }
                                else if (rightOrder.StartTime <= startTime.AddMinutes(serviceInfo.Duration - _infelicity))
                                {
                                    result.Add(new Order
                                    {
                                        Id = Guid.NewGuid(),
                                        CarWash = carWashOrders.Key,
                                        Service = serviceInfo,
                                        Client = null,
                                        Date = date,
                                        StartTime = startTime.AddMinutes(-_infelicity),
                                        EndTime = startTime.AddMinutes(serviceInfo.Duration - _infelicity),
                                        OrderState = Enums.OrderState.WaitingConfirmation,
                                        Window = windowOrders.Key
                                    });

                                }
                                }
                            }
                        }
                    }
                    
                }
            }

  

        }

        public Dictionary<CarWash, Dictionary<int, List<Order>>> GetOrdersByCarWashesDic(List<Order> allOrders, List<CarWash> carWashes)
        {
            var result = new Dictionary<CarWash, Dictionary<int, List<Order>>>();
            foreach (var carWash in carWashes)
            {
                for (int i = 0;i<carWash.WindowsNumber; i++)
                {
                    result.Add(carWash, new Dictionary<int, List<Order>>() { [i+1] = new List<Order>()});
                }
                
            }
            foreach (var order in allOrders)
            {
                result[order.CarWash][order.Window].Add(order);
            }
            return result;
        }
    }
}
