"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invoice_js_1 = require("./classes/invoice.js");
// const InvoiceModule = require("./classes/invoice.js");
var invOne11 = new invoice_js_1.InvoiceModule("mario", "work on the mario website", 250);
var invTwo22 = new invoice_js_1.InvoiceModule("luigi", "work on the luigi website", 300);
// console.log(invOne11, invTwo22);
var invoicesTwo1 = []; // array of invoicesTwo1 objects
invoicesTwo1.push(invOne11);
invoicesTwo1.push(invTwo22);
// invOne11.client = "yoshi"; // this will throw an error because client is readonly
// invOne11.details = "work on the yoshi website"; // this will throw an error because details is private
invTwo22.amount = 400;
invoicesTwo1.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invoicesTwo1);
