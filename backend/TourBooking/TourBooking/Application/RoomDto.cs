namespace TourBooking.Application
{
    public class RoomDto
    {
        public string name { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public int adults { get; set; }
        public int children { get; set; }
        public DateOnly inDate { get; set; }
        public DateOnly outDate { get; set; }
    }
}
