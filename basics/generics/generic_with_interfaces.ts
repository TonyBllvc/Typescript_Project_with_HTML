
// An interface defines how an object should look
interface Resource<T>{
    uid: number;
    resourceName: string
    data: T // For flexibility on data
}

const dataThree: Resource<object> = {
    uid: 1,
    resourceName: "Black",
    data: {
        name: 'Okey'
    }
}

const dataFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'List',
    data: ["d"]
}

console.log(dataThree, dataFour)