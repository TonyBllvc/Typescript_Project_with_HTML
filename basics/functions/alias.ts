

// alias for function
const logDetailss = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet3 = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} says hello`);
}

logDetailss(123, 'mario');
greet3({ name: 'yoshi', uid: '123' });
// or 

type StringOrNum = string | number;

const logDetails2 = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet4 = (user: { name: string, uid: StringOrNum }) => {
    console.log(`${user.name} says hello`);
}
logDetails2(123, 'mario');
greet4({ name: 'yoshi', uid: '123' });
// or

type ObjectWithName = { name: string, uid: StringOrNum };

const greet5 = (user: ObjectWithName) => {
    console.log(`${user.name} says hello`);
}
greet5({ name: 'yoshi', uid: '123' });
