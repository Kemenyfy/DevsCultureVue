using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Server.Migrations
{
    public partial class AddedResourcesTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ResourcesTable",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Name = table.Column<string>(nullable: true),
                    BriefDescription = table.Column<string>(nullable: true),
                    DetailedDescription = table.Column<string>(nullable: true),
                    Link = table.Column<string>(nullable: true),
                    SubcategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ResourcesTable", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ResourcesTable_SubcategoryTable_SubcategoryId",
                        column: x => x.SubcategoryId,
                        principalTable: "SubcategoryTable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ResourcesTable_SubcategoryId",
                table: "ResourcesTable",
                column: "SubcategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ResourcesTable");
        }
    }
}
