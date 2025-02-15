var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Generics allows for creating reuseable bocks of codes to be used for different types 
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var doc10 = addUID({ name: 'black', age: 40 });
// console.log(doc10.name) // we did not specify the types of data to go into the obj parameter
// so to resolve it
// Add a big 'T' ie. <T>
// This captures whatever properties we pass inside the object
// Afterwhich, we do ie. <T extends object>; to specify what kinda data comes in.
// You can also decide to get specific with passing the properties allowed
// Like so: <T extrends {name: string, age: number}>
var addUIDTwo = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var doc11 = addUIDTwo({ name: 'black', age: 40 });
console.log(doc11.name);
