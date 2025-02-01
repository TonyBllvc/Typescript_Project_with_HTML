// explicit types
var character;
var age2;
var isLoggedIn;
age2 = 30;
isLoggedIn = true;
// arrays
var ninjas = [];
ninjas = ['yoshi', 'mario'];
var ages;
// ages.push(25); // Error(can not push to an empty array with type number because it is not initialized)
// union types
// for mixed types(using union types on arrays)
var mixed2 = [];
// for mixed types(using union types on single variable)
var uid;
// for mixed types(using union types on objects)
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // this is also valid because array is also an object
var ninjaTwo; // this is also valid because it is an object
var ninjaThree;
ninjaThree = { name: 'mario', age: 30 };
