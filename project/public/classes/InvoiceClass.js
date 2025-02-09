export class Invoice {
    client;
    details;
    amount;
    //  class InvoiceModule {   
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // This format method is enforced here
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
// module.exports = InvoiceModule
