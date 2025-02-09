"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceModule = void 0;
var InvoiceModule = /** @class */ (function () {
    //  class InvoiceModule {   
    function InvoiceModule(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    InvoiceModule.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return InvoiceModule;
}());
exports.InvoiceModule = InvoiceModule;
// module.exports = InvoiceModule
