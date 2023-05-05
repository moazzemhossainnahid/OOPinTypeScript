class BankAccount {
    id: number;
    name: string;
    private _balance: number


    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // getter
    get balance(): number {
        return this._balance
    }

    getBalance(): number {
        return this._balance
    }

    // setter
    set deposit(amount: number) {
        this._balance = this._balance + amount
    }

    addDeposit(amount: number) {
        this._balance = this._balance + amount
    }


}

// class StudentAccount extends BankAccount{
// test(){
//     this._balance
// }
// }


const myAccount = new BankAccount(444, "nahid", 20)

console.log(myAccount.balance);
myAccount.deposit=30

console.log(myAccount.balance);