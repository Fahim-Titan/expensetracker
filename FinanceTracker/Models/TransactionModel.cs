namespace FinanceTracker.Models
{
    // for the time being i am not using TransactionDetail class,
    //  so not using TransactionModel class too
    public class TransactionModel
    {
        public Transaction Transaction { get; set; } 
        public TransactionDetail TransactionDetail { get; set; }

        public TransactionModel()
        {
            this.Transaction = new Transaction();
            this.TransactionDetail = new TransactionDetail();
        }
    }
}