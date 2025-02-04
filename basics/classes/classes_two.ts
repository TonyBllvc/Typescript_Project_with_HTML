class InvoiceTwo {
    // Now note: All of out defined classes are public by default
    //  which is to say that they can be accessed from anywhere in the code.

    // but We can also use private and protected
    // so now let's do that
  readonly client: string; // readonly means that the value can not be changed
  private details: string; // private means that the value can only be accessed within the class
  public amount: number; // public means that the value can be accessed from anywhere in the code

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

    format() {
    //   this.client = "yoshi"; // this will throw an error because client is readonly
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne1 = new InvoiceTwo("mario", "work on the mario website", 250);
const invTwo2 = new InvoiceTwo("luigi", "work on the luigi website", 300);
// console.log(invOne1, invTwo2);

let invoicesTwo: InvoiceTwo[] = []; // array of invoicesTwo objects
invoicesTwo.push(invOne1);
invoicesTwo.push(invTwo2);

// invOne1.client = "yoshi"; // this will throw an error because client is readonly
// invOne1.details = "work on the yoshi website"; // this will throw an error because details is private
invTwo2.amount = 400;

invoicesTwo.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
    });

console.log(invoicesTwo);

// Now, I want to show you a shirt cut to the above code
// This is called access modifiers

class InvoiceThree {
    // Now note: All of out defined classes are public by default
    //  which is to say that they can be accessed from anywhere in the code.

    // but We can also use private and protected
    // so now let's do that
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

    format() {
    //   this.client = "yoshi"; // this will throw an error because client is readonly
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

