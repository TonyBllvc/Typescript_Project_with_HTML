class Up {
    // Private property to store the name
    #name;

    // Private property to store a random number
    #randomNumber;

    // Readonly property
    get again() {
        return "Readonly Property";
    }

    constructor() {
        this.#name = "Up";
        // Initialize the readonly property
        // this.again = "Readonly Property"; // No need to initialize, getter will return the value
        // Initialize the readonly property
        this.again = "Readonly Property";
    }

    // Method to get the name property
    getName() {
        return this.#name;
    }

    // Method to get the random number property
    getRandomNumber() {
        return this.#randomNumber;
    }

    // Method to set a new random number
    setRandomNumber() {
        this.#randomNumber = Math.random();
    }
}
