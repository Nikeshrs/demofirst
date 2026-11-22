using Microsoft.EntityFrameworkCore;
using TourBooking.Domain.Entity;

namespace TourBooking.Infrastructure
{
    public class Context:DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
        public DbSet<TourEntity> Tour { get; set; }
        public DbSet<RoomEntity> Room { get; set; }
    }
}
