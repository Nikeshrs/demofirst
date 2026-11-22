using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TourBooking.Migrations
{
    /// <inheritdoc />
    public partial class final : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "childern",
                table: "Room",
                newName: "children");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "children",
                table: "Room",
                newName: "childern");
        }
    }
}
