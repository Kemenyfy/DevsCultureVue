namespace Server.Models
{
    public class Resources
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string BriefDescription { get; set; }
        public string DetailedDescription { get; set; }
        public string Link { get; set; }
        public int SubcategoryId { get; set; }
        public Subcategory Subcategory { get; set; }

    }
    
}