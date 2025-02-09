export class Payemnt {
    recipient;
    details;
    amount;
    //  class Payemnt {   
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // This format method is enforced here
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
// module.exports = Payemnt
