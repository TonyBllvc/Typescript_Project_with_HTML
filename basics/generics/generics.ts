
// Generics allows for creating reuseable bocks of codes to be used for different types 
const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid}
}

let doc10 = addUID({ name: 'black', age: 40 })

// console.log(doc10.name) // we did not specify the types of data to go into the obj parameter

// so to resolve it
// Add a big 'T' ie. <T>
// This captures whatever properties we pass inside the object
// Afterwhich, we do ie. <T extends object>; to specify what kinda data comes in.

// You can also decide to get specific with passing the properties allowed
// Like so: <T extrends {name: string, age: number}>
const addUIDTwo = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid}
}

let doc11 = addUIDTwo({ name: 'black', age: 40 })

console.log(doc11.name)