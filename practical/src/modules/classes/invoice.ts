export class InvoiceModule {
//  class InvoiceModule {   
  constructor(
        readonly client: string,
        private details: string,
        public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

// module.exports = InvoiceModule