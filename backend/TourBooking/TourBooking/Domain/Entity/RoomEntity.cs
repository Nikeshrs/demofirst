namespace TourBooking.Domain.Entity
{
    public class RoomEntity
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public int adults { get; set; }
        public int children { get; set; }
        public DateOnly inDate { get; set; }
        public DateOnly outDate { get; set; }
    }
}
