using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinanceTracker.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public DateTime Date { get; set; }
        public double Amount { get; set; }
        [ForeignKey("Asset")]
        public int AssetId { get; set; }
        public virtual Asset asset { get; set; }

        [ForeignKey("ApplicationUser")]
        public string UserId { get; set; }
        public virtual ApplicationUser user { get; set; }


        public Transaction()
        {
            Asset asset = new Asset();
        }
    }

    public enum TransactionType
    {
        Expense,
        Income,
        Transfer,
        Loan
    }


}