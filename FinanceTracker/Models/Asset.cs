using System.ComponentModel.DataAnnotations.Schema;

namespace FinanceTracker.Models
{
    public class Asset
    {
        public int Id { get; set; }
        public string AssetName { get; set; }
        public string AssetDescription { get; set; }
        public double Amount { get; set; }
        
        [ForeignKey("ApplicationUser")]
        public string UserId { get; set; }
        public virtual ApplicationUser user { get; set; }
    }
}