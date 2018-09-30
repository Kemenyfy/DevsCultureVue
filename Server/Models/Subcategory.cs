namespace Server.Models
{
    public class Subcategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string BriefDescription { get; set; }
        public string URL { get; set; }
        public string ImageURL { get; set; }
        public int CategoryId { get; set; }

        public Category Category { get; set; }

    }
    
}