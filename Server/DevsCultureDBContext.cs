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
                var conn = Environment.GetEnvironmentVariable("CONNECTION_STRING") ?? "server=localhost;database=DevsCultureDB";
                optionsBuilder.UseNpgsql(conn);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

        public DbSet<Category> CategoryTable { get; set; }
        public DbSet<Subcategory> SubcategoryTable { get; set; }
        public DbSet<Resources> ResourcesTable { get; set; }
    }
}
