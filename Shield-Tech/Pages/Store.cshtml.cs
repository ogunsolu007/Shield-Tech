using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Shield_Tech.Models;
using System.Collections.Generic;

namespace Shield_Tech.Pages
{
    public class StoreModel : PageModel
    {
        public readonly AppDataContext _db;
        public List<Product> Products { get; set; }

        public StoreModel(AppDataContext db)
        {
            _db = db;
        }



        public void OnGet()
        {
            Products = _db.Products.ToList();
        }



    }
}
