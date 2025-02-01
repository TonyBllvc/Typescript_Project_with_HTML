// type Function = (args: any) => any
var greet = function () {
    console.log('Hello, World!');
};
var greet2;
greet2 = function () {
    console.log('Hello, World!');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
// optional parameter
// optional parameter should be at the end
var add2 = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add2(5, 10);
var add3 = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add3(5, 10, '20');
// return type of function explicitly
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
// alias for function
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet3 = function (user) {
    console.log("".concat(user.name, " says hello"));
};
var logDetails2 = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet4 = function (user) {
    console.log("".concat(user.name, " says hello"));
};
var greet5 = function (user) {
    console.log("".concat(user.name, " says hello"));
};
// greet5({ name: 'yoshi', uid: '123' });
