import { InvoiceModule } from "./interface/interface_classes.js"
import { Payemnt } from './interface/interface_classes_two.js'
import { HasFormatter } from "./interface/class_interface/has_formatter.js"
// const InvoiceModule = require("./classes/invoice.js");

let docOne: HasFormatter; // enforces the 'HasFormatter'
let docTwo: HasFormatter; // enforces the 'HasFormatter'

docOne = new InvoiceModule("Black", "Development", 2300)
docTwo = new Payemnt("Kink", 'Maintanance', 300)

let docs: HasFormatter[] = []

docs.push(docOne)
docs.push(docTwo)

console.log(docs)

const invOne11 = new InvoiceModule("mario", "work on the mario website", 250);
const invTwo22 = new InvoiceModule("luigi", "work on the luigi website", 300);
// console.log(invOne11, invTwo22);

let invoicesTwo1: InvoiceModule[] = []; // array of invoicesTwo1 objects
invoicesTwo1.push(invOne11);
invoicesTwo1.push(invTwo22);

// invOne11.client = "yoshi"; // this will throw an error because client is readonly
// invOne11.details = "work on the yoshi website"; // this will throw an error because details is private
invTwo22.amount = 400;

invoicesTwo1.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
    });

console.log(invoicesTwo1);