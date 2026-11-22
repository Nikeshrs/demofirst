
using Microsoft.EntityFrameworkCore;
using TourBooking.Controllers;
using TourBooking.Infrastructure;

namespace TourBooking
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();
            string cs = builder.Configuration.GetConnectionString("Tour");
            builder.Services.AddDbContext<Context>(options => options.UseSqlServer(cs));



            var app = builder.Build();

            // Configure the HTTP request pipeline.
            app.UseCors(P => P.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
