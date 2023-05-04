class Animal {
    public name: string,
    public species: string,
    public sound: string
    // parameter properties
    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    public makeSound() {
        console.log(`This ${this.name} says ${this.sound}`);  //German Shepherd says Ghew Ghew
    }
}

const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
const cat = new Animal("Partian", "cat", "Meaw Meaw")

dog.makeSound();
cat.makeSound();