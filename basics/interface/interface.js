var me = {
    name: 'shaun',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    },
    skills: [0, '3', [2]]
    // or 
    // spend(amount: 30): number {
    //     return amount
    // }
};
console.log(me);
var greetMe2 = function (personl) {
    console.log("hello", personl.name);
};
greetMe2(me);
