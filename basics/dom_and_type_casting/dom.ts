// Now, before we go indept, understand that typescript can not access the dom directly,
// so we have to tell typescript that the dom exists and we can access it by type casting.
// This is done by using the "as" keyword.

// const anchor = document.querySelector("a")!; // ! means that we are sure that the element exists

// console.log(anchor?.href); // ? means that we are not sure if the element exists

// const form = document.querySelector("form")!;  // ! means that we are sure that the element exists

const form = document.querySelector(".new-item-form") as HTMLFormElement; // type casting
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => { // type casting. e is an event. and we are sure that it is an event
    // Event is built in typescript interface
  e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber // valueAsNumber is a built in property of the input element
    );
});