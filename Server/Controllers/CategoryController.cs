using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private DevsCultureDBContext db { get; set; }

        //Making db Global
        public CategoryController(DevsCultureDBContext _db)
        {
            this.db = _db;
        }

        // GET api/category
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            // Query Database Table Questions --> Return Ordered by Title and then by Date
            var categories = this.db.CategoryTable;
            return categories;
        }
    }
}