using System.ComponentModel.DataAnnotations.Schema;

namespace FinanceTracker.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        [ForeignKey("Category")]
        public int? CategoryID { get; set; }
        public virtual Category Categories { get; set; }

        [ForeignKey("ApplicationUser")]
        public string UserId { get; set; }
        public virtual ApplicationUser user { get; set; }
    }
}