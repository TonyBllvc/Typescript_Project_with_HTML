import {HasFormatter} from "../interface/class_interface/has_formatter.js"

export class Payemnt implements HasFormatter {
//  class Payemnt {   
  constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
  ) {}

    // This format method is enforced here
  format() { // Here we are using what was gotten from HasFormatter
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}

// module.exports = Payemnt