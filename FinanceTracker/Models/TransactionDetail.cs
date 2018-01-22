using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinanceTracker.Models
{
    public class TransactionDetail
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }
        public DateTime Date { get; set; }

        [ForeignKey("Transaction")]
        public int TransactionID { get; set; }
        public virtual Transaction transaction { get; set; }


        [ForeignKey("ApplicationUser")]
        public string UserId { get; set; }
        public virtual ApplicationUser user { get; set; }
    }
}