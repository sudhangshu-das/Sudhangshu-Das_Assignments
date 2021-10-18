// Q1.
class name {
function nextFibonacci(curent_value) {
    let next_value = current_value * (1 + Math.sqrt(5)) / 2.0;
    return Math.round(next_value);
}
let current_value = 5;
console.log("next value is:" + nextFibonacci(current_value));






// Q2. 
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
class SavingsAccount extends Account {
    constructor(id, name, balance, interest) {
        super(id, name, balance);
        this.interest = interest;
    }
    totalBalance = () => {
        this.balance += this.interest;
        console.log(this.balance);
    };
}

class CurrentAccount extends Account {
    constructor(id, name, balance, cashCredit) {
        super(id, name, balance);
        this.cashCredit = cashCredit;
    }
    totalBalance = () => {
        this.balance += this.cashCredit;
        console.log(this.balance);
    };
}

let S1 = new SavingsAccount(1001, 'Rohit', 40400, 4000);
let S2 = new CurrentAccount(10003, 'Shardul', 30050, 3800);
const y = S1.totalBalance();
const z = S2.totalBalance();
console.log(y + z);


//Q3.
interface printTable {
    fname?: string;
    id?: number;
    area?: Number;
};

let circle: printTable = {
    area: 720,
};

let employee: printTable = {
    fname: "Vikas",
    id: 500,
};

function printAll(circle, employee) {
    console.log(circle);
    console.log(employee);
}

printAll(circle, employee);