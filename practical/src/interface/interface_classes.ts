import {HasFormatter} from "../interface/class_interface/has_formatter.js"

export class InvoiceModule implements HasFormatter {
//  class InvoiceModule {   
  constructor(
        readonly client: string,
        private details: string,
        public amount: number
  ) {}

    // This format method is enforced here
  format() { // Here we are using what was gotten from HasFormatter
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

// module.exports = InvoiceModule