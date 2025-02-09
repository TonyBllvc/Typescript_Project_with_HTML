"use strict";
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
    skills: [0, '3', [2]]
    // or 
    // spend(amount: 30): number {
    //     return amount
    // }
};
console.log(me);
const greetMe2 = (personl) => {
    console.log("hello", personl.name);
};
greetMe2(me);
