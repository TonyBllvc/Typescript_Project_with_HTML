
// An interface defines how an object should look
interface IsPerson2 {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
    skills: [number, string, object]
}

const me: IsPerson2 = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: 30) {
        console.log('I spent', amount)
        return amount
    },
    skills: [0, '3', [2]]
    // or 
    // spend(amount: 30): number {
    //     return amount
    // }
}

console.log(me)

const greetMe2 = (personl: IsPerson2) => {
    console.log("hello", personl.name)
}

greetMe2(me)