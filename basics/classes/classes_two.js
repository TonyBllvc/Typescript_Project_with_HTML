var InvoiceTwo = /** @class */ (function () {
    function InvoiceTwo(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    InvoiceTwo.prototype.format = function () {
        //   this.client = "yoshi"; // this will throw an error because client is readonly
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return InvoiceTwo;
}());
var invOne1 = new InvoiceTwo("mario", "work on the mario website", 250);
var invTwo2 = new InvoiceTwo("luigi", "work on the luigi website", 300);
// console.log(invOne1, invTwo2);
var invoicesTwo = []; // array of invoicesTwo objects
invoicesTwo.push(invOne1);
invoicesTwo.push(invTwo2);
// invOne1.client = "yoshi"; // this will throw an error because client is readonly
// invOne1.details = "work on the yoshi website"; // this will throw an error because details is private
invTwo2.amount = 400;
invoicesTwo.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invoicesTwo);
// Now, I want to show you a shirt cut to the above code
// This is called access modifiers
var InvoiceThree = /** @class */ (function () {
    // Now note: All of out defined classes are public by default
    //  which is to say that they can be accessed from anywhere in the code.
    // but We can also use private and protected
    // so now let's do that
    function InvoiceThree(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    InvoiceThree.prototype.format = function () {
        //   this.client = "yoshi"; // this will throw an error because client is readonly
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return InvoiceThree;
}());
