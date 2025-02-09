import { HasFormatter } from "./interface/has_formatter.js"
import { Payemnt } from './classes/PaymentClass.js'
import { Invoice } from './classes/InvoiceClass.js'
import { ListTemplates } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement; // type casting
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// List template instance
const ul = document.querySelector("ul")! 
const list = new ListTemplates(ul) 

form.addEventListener("submit", (e: Event) => { // type casting. e is an event. and we are sure that it is an event
    // Event is built in typescript interface
  e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payemnt(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'start')
    
    // console.log(doc)
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber // valueAsNumber is a built in property of the input element
    // );
});

