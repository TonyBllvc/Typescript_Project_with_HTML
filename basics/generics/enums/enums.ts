// enum: These are a special type that allow us to store a set of constants or keywords and associate themn with a numeric value

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// Now, The selections of these types would be done using indexing: 0, 1, 2, 3, 4

// An interface defines how an object should look
interface ResourceEnum<T> {
    uid: number;
    resourceType: ResourceType;
    data: T // For flexibility on data
}

const dataFive: ResourceEnum<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {
        name: 'Okey'
    }
}

const dataSix: ResourceEnum<string[]> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: ["d"]
}

console.log(dataFive, dataSix)