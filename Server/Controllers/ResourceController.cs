using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    [Route("api/subcategory/[controller]")]
    [ApiController]
    public class ResourceController : ControllerBase
    {
        private DevsCultureDBContext db { get; set; }

        //Making db Global
        public ResourceController(DevsCultureDBContext _db)
        {
            this.db = _db;
        }

        // GET api/subcategory/resource
        [HttpGet]
        public IEnumerable<Resources> Get()
        {
            // Query Database Table Questions --> Return Ordered by Title and then by Date
            var resources = this.db.ResourcesTable;
            return resources;
        }

        // GET api/subcategory/resource/subcategoryId
        [HttpGet("{Id}")]
        public IEnumerable<Resources> Get(int Id)
        {
            // Query Database Table Questions --> Return Ordered by Title and then by Date
            var resources = this.db.ResourcesTable.Where(w => w.SubcategoryId == Id);
            return resources;
        }
    }
}