// TypeScript file for dynamic types
// dynamic types
// primitive dataset types
let age5: any = 25;
age5 = true;
console.log(age5);
age5 = 'hello';
console.log(age5);

// arrays
let mixed5: any[] = [];
mixed5.push(5);
mixed5.push('mario');
mixed5.push(false);
console.log(mixed5);

// objects
let ninja5: { name: any, age: (number | any)[] };
ninja5 = { name: 'yoshi', age: [25, 'mario'] };
console.log(ninja5);