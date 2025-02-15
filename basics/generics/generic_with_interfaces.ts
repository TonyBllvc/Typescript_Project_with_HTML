
// An interface defines how an object should look
interface ResourceGenericInterface<T>{
    uid: number;
    resourceName: string
    data: T // For flexibility on data
}

const dataThree: ResourceGenericInterface<object> = {
    uid: 1,
    resourceName: "Black",
    data: {
        name: 'Okey'
    }
}

const dataFour: ResourceGenericInterface<string[]> = {
    uid: 2,
    resourceName: 'List',
    data: ["d"]
}

console.log(dataThree, dataFour)