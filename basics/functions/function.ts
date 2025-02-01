// type Function = (args: any) => any
let greet = () => {
    console.log('Hello, World!');
}

let greet2: Function;

greet2 = () => {
    console.log('Hello, World!');
}

const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add(5, 10, '20');

// optional parameter
// optional parameter should be at the end
const add2 = (a: number, b: number, c?: number | string): void => {
    console.log(a + b);
    console.log(c);
}

add2(5, 10);


const add3 = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add3(5, 10, '20');

// return type of function explicitly
const minus = (a: number, b: number): number => {
    return a - b;
}

let result = minus(10, 7);
