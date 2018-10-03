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
    public class SubcategoryController : ControllerBase
    {
        private DevsCultureDBContext db { get; set; }

        //Making db Global
        public SubcategoryController(DevsCultureDBContext _db)
        {
            this.db = _db;
        }

        // GET api/subcategory
        [HttpGet]
        public IEnumerable<Subcategory> Get()
        {
            // Query Database Table Questions --> Return Ordered by Title and then by Date
            var subcategories = this.db.SubcategoryTable;
            return subcategories;
        }

        // GET api/subcategory/categoryId
        [HttpGet("{Id}")]
        public IEnumerable<Subcategory> Get(int Id)
        {
            // Query Database Table Questions --> Return Ordered by Title and then by Date
            var subcategories = this.db.SubcategoryTable.Where(w => w.CategoryId == Id);
            return subcategories;
        }
    }
}