// alias for function
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet3 = function (user) {
    console.log("".concat(user.name, " says hello"));
};
logDetails(123, 'mario');
greet3({ name: 'yoshi', uid: '123' });
var logDetails2 = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet4 = function (user) {
    console.log("".concat(user.name, " says hello"));
};
logDetails2(123, 'mario');
greet4({ name: 'yoshi', uid: '123' });
var greet5 = function (user) {
    console.log("".concat(user.name, " says hello"));
};
greet5({ name: 'yoshi', uid: '123' });
