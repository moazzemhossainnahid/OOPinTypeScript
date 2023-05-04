class Parent {
    name: string;
    age: number;
    address: string;


    constructor(name: string, age: number, address: string) {
        this.name = name
        this.age = age
        this.address = address
    }

    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`
    }
}


class Student extends Parent {
    // name:string;
    // age:number;
    // address:string;

    // constructor(name:string, age:number,address:string){
    //     this.name=name
    //     this.age=age
    //     this.address=address
    // }

    // makeSleep(hours:number):string{
    //     return `This ${this.name} will sleep for ${hours}`
    // }

    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }


}

const Student1 = new Student("Mr.X", 15, "Uganda")


class Teacher extends Parent {
    // name: string;
    // age: number;
    // address: string;
    // designation: string;

    // constructor(name: string, age: number, address: string, designation: string) {
    //     this.name = name
    //     this.age = age
    //     this.address = address
    //     this.designation = designation

    // }

    // makeSleep(hours: number): string {
    //     return `This ${this.name} will sleep for ${hours}`
    // }

    // takeClass(noOfClass: number): string {
    //     return `This ${this.name} will take ${noOfClass}`
    // }

    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation

    }

    takeClass(noOfClass: number): string {
        return `This ${this.name} will take ${noOfClass}`
    }
}


const Teacher1 = new Teacher("Mr.Ali Hossain", 54, "BD", "BSC")