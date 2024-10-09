using Microsoft.EntityFrameworkCore;
using studentGuide.Models;

namespace studentGuide.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { } //<> type when mutiple have we can use 

        public DbSet<StudentData> Student_Map { get; set; }

     
    }
}
