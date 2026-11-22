namespace TourBooking.Application
{
    public class TourDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateOnly Date { get; set; }
        public int People { get; set; }
        public string Tour { get; set; }
        public string ContactType { get; set; }
    }
}
