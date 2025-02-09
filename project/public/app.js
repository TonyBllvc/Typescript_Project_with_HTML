import { Payemnt } from './classes/PaymentClass.js';
import { Invoice } from './classes/InvoiceClass.js';
import { ListTemplates } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form"); // type casting
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// List template instance
const ul = document.querySelector("ul");
const list = new ListTemplates(ul);
form.addEventListener("submit", (e) => {
    // Event is built in typescript interface
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payemnt(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'start');
    // console.log(doc)
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber // valueAsNumber is a built in property of the input element
    // );
});
