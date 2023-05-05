// typeof guard


// key of huard
type Alphanumerics = string | number

function add(param1: Alphanumerics, param2: Alphanumerics): Alphanumerics {
    if (typeof param1 == 'number' && param2 === 'number') {
        return param1 + param2
    } else {
        return param1.toString() + param2.toString()
    }
}


// in guard

type NormalUserType = {
    name: string
}

type AdminuserType = {
    name: string,
    role: "admin"
}

const normalUser1: NormalUserType = { name: "Mr. Kallu" };
const adminUser1: AdminuserType = { name: "Mr. Gallu", role: "admin" }


function getUser(user: NormalUserType | AdminuserType): string {
    if ('role' in user) {
        return `I am an Admin and my role is ${user.role}`
    } else {
        return `I am a Normal User`
    }
}

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));



// instance of guard

class Animal1 {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    public makeSound() {
        console.log(`I am Making Sound`);  //German Shepherd says Ghew Ghew
    }
}

class dog1 extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeBark() {
        console.log("I am Barking");
    }
}

class cat1 extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeMeaw() {
        console.log("I am Meawing");
    }
}


function getAnimal(obj: Animal1) {
    if (obj instanceof dog1) {
        obj.makeBark()
    } else if (obj instanceof cat1) {
        obj.makeMeaw()
    } else {
        obj.makeSound()
    }
}

const Animal2 = new dog1('German Bhai', 'dog')
const Animal3 = new cat1('Persian Bhai', 'cat')


getAnimal(Animal2)