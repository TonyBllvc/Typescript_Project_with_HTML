// let greet7: Function

// (): void

//  example 1
let great8: (a: string, b: string) => void 

great8 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add') {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

// example 3
let logDetails: (obj: { name: string, age: number }) => void;

logDetails = (ninja: { name: string, age: number }) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}

// or

type person = { name: string, age: number }

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}