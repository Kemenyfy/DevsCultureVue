using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Server.Models;

namespace Server
{
    public partial class DevsCultureDBContext : DbContext
    {
        public DevsCultureDBContext()
        {
        }

        public DevsCultureDBContext(DbContextOptions<DevsCultureDBContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("server=localhost;Database=DevsCultureDB");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}

        public DbSet<Category> CategoryTable { get; set; }
        public DbSet<Subcategory> SubcategoryTable { get; set; }
    }
}
