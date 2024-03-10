using Microsoft.EntityFrameworkCore;

namespace Shield_Tech.Models
{
    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options) :
        base(options)
        { }
        public DbSet<Product> Products { get; set; }

        

    }
}
