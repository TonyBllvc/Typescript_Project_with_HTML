// enum: These are a special type that allow us to store a set of constants or keywords and associate themn with a numeric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var dataFive = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {
        name: 'Okey'
    }
};
var dataSix = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: ["d"]
};
console.log(dataFive, dataSix);
