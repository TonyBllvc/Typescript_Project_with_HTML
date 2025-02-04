class Invoice {
    // Now note: All of out defined classes are public by default
    //  which is to say that they can be accessed from anywhere in the code.

    // but We can also use private and protected
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
// console.log(invOne, invTwo);

let invoices: Invoice[] = []; // array of invoices objects
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = "yoshi";
invTwo.amount = 400;

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
    });

console.log(invoices);