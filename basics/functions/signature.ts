// let greet7: Function

// (): void (Used to indicate that a function doesn't return anything)

//  example 1
// The function does not return anything, it just logs to the console.
// The void return type ensures that you cannot accidentally return a value.
let great8: (a: string, b: string) => void 

great8 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// example 2
// This function must return a number, so it’s not void.
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add') {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}


// example 3
// The function does not return anything, it just logs to the console.
// The void return type ensures that you cannot accidentally return a value.
// with objects 
let logDetails: (obj: { name: string, age: number }) => void;

logDetails = (ninja: { name: string, age: number }) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}

// or

type person = { name: string, age: number }

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}