using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TourBooking.Application;
using TourBooking.Domain.Entity;
using TourBooking.Infrastructure;

namespace TourBooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TourData : ControllerBase
    {
        private readonly Context obj;

        public TourData(Context obj)
        {
            this.obj = obj;
        }
        [HttpGet]
        public IActionResult AllData()
        {
            var data = obj.Tour;
            return Ok(data);
        }
        [HttpGet("{id}")]
        public IActionResult DataById(int id)
        {
            var data = obj.Tour.FirstOrDefault(a => a.Id == id);
            return Ok(data);
        }
        [HttpPost]
        public IActionResult Insert([FromBody] TourDto dtoobj)
        {
            var a = new TourEntity();
            a.FirstName = dtoobj.FirstName;
            a.LastName = dtoobj.LastName;
            a.Email = dtoobj.Email;
            a.Phone = dtoobj.Phone;
            a.Date = dtoobj.Date;
            a.People = dtoobj.People;
            a.Tour = dtoobj.Tour;
            a.ContactType = dtoobj.ContactType;
            obj.Tour.Add(a);
            obj.SaveChanges();
            return Ok("Data Inserted Successfully");
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] TourDto dtoobj)
        {
            var data = obj.Tour.FirstOrDefault(a => a.Id == id);
            data.FirstName = dtoobj.FirstName;
            data.LastName = dtoobj.LastName;
            data.Email = dtoobj.Email;
            data.Phone = dtoobj.Phone;
            data.Date = dtoobj.Date;
            data.People = dtoobj.People;
            data.Tour = dtoobj.Tour;
            data.ContactType = dtoobj.ContactType;
            obj.SaveChanges();
            return Ok("Updated Successfully");
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = obj.Tour.FirstOrDefault(a => a.Id == id);
            obj.Tour.Remove(data);
            obj.SaveChanges();
            return Ok("Deleted Successfully");
        }



        //RoooooooooooooooooooooooooooooooooooooooooMOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOooo
        //YAHOOOOOOOOOOOOOOOHOYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        [HttpGet("room")]
        public IActionResult AllRoomData()
        {
            var data = obj.Room;
            return Ok(data);
        }
        [HttpGet("room/{id}")]
        public IActionResult RoomDataById(int id)
        {
            var data = obj.Room.FirstOrDefault(a => a.id == id);
            return Ok(data);
        }
        [HttpPost("room")]
        public IActionResult InsertRoom([FromBody] RoomDto dtoobj)
        {
            var a = new RoomEntity();
            a.name = dtoobj.name;
            a.email = dtoobj.email;
            a.phone = dtoobj.phone;
            a.adults = dtoobj.adults;
            a.children = dtoobj.children;
            a.inDate= dtoobj.inDate;
            a.outDate = dtoobj.outDate;
            
            obj.Room.Add(a);
            obj.SaveChanges();
            return Ok("Data Inserted Successfully");
        }
        [HttpPut("room/{id}")]
        public IActionResult UpdateRoom(int id, [FromBody] RoomDto dtoobj)
        {
            var a = obj.Room.FirstOrDefault(a => a.id == id);
            a.name = dtoobj.name;
            a.email = dtoobj.email;
            a.phone = dtoobj.phone;
            a.adults = dtoobj.adults;
            a.children = dtoobj.children;
            a.inDate = dtoobj.inDate;
            a.outDate = dtoobj.outDate;
            obj.SaveChanges();
            return Ok("Updated Successfully");
        }
        [HttpDelete("room/{id}")]
        public IActionResult DeleteRoom(int id)
        {
            var data = obj.Room.FirstOrDefault(a => a.id == id);
            obj.Room.Remove(data);
            obj.SaveChanges();
            return Ok("Deleted Successfully");
        }



    }
}
