
// explicit types
let character: string;
let age2: number;
let isLoggedIn: boolean;

age2 = 30;

isLoggedIn = true;  


// arrays
let ninjas: string[] = [];

ninjas = ['yoshi', 'mario'];

let ages: number[];

// ages.push(25); // Error(can not push to an empty array with type number because it is not initialized)


// union types

// for mixed types(using union types on arrays)
let mixed2: (string | number | boolean)[] = [];

// for mixed types(using union types on single variable)
let uid: string | number;

// for mixed types(using union types on objects)
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // this is also valid because array is also an object

let ninjaTwo: {} // this is also valid because it is an object

let ninjaThree: {
    name: string,
    age: number
};

ninjaThree = { name: 'mario', age: 30 };