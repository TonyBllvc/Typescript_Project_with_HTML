var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on the mario website", 250);
var invTwo = new Invoice("luigi", "work on the luigi website", 300);
// console.log(invOne, invTwo);
var invoices = []; // array of invoices objects
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "yoshi";
invTwo.amount = 400;
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invoices);
