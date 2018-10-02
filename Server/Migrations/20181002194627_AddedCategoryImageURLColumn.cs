using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class AddedCategoryImageURLColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "URL",
                table: "SubcategoryTable");

            migrationBuilder.AddColumn<string>(
                name: "ImageURL",
                table: "CategoryTable",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageURL",
                table: "CategoryTable");

            migrationBuilder.AddColumn<string>(
                name: "URL",
                table: "SubcategoryTable",
                nullable: true);
        }
    }
}
