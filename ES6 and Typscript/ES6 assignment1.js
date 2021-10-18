//Q1.
const a = 10;
console.log(a);
a = 20;
console.log(a);


//Q2.
var a = 1;
var b = 20
if (a == 1) {
    let a = 70;
    let b = 50;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);

//Q3.
var Order = {
    id: 1,
    title: "Vishal",
    price: 700,
    getorder(value) { return value },
    printorder(val) { return val }
};
var p = Object.assign({}, Order);
p.id = 5;
p.title = "neha";
p.getorder(5);
p.printorder(7);
document.write(p);
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};



//Q.4


let someJasonArray = ["Bruce", "Nitya", "Vishal"];
var len = someJasonArray.length, output = [];



for (var i = 0; i < len; i++) {
    output.push(someJasonArray[i], someJasonArray[i].length);

}

console.log(output);

//5(a)
let add = function (value = 10) {
    console.log(value + 10);
};
add();

//b
let userFriend = function (username, ...a) {
    console.log("username: " + username);
    for (let i in a) {
        console.log("friends name: " + a[i]);

    }
}
var username = "sweden";
var a = ["Nitya", "Amrita", "Harsh"];
userFriend(username, a);

//c
let printCapitalName = function (...a) {

    for (let i in a) {
        console.log(a[i].toUpperCase());

    }
}

var a = ["Nitya,Amrita,Harsh"];
printCapitalName(...a);  //spread operator

//6
var names = 'Vishal';
const deskno = 143;
var laptopModel = 'hp';

var message = `Hello SYSNET, My name is ${names} ,Laptop Model is ${laptopModel} and Desk Number is ${deskno}.
There is some problem raising in the laptop please resolve the issue.

Thanks and Regards
Vishal`;

console.log(message);







//Q7. (a)
var a = ["an", "bh", "gy", "jjhg"];
var b = ["gy"];

let map = {};
a.forEach(i => map[i] = false);
b.forEach(i => map[i] === false && (map[i] = true));
let jasonArray = Object.keys(map).map(k => ({ name: k, matched: map[k] }
));
console.log(jasonArray);

// Q8. (b)
let org = {
    name: 'Vishal',
    address:
        { city: 'Delhi', pincode: 110058 }
};
let { name, address } = org;

console.log(address.pincode);

//Q8.

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

let S1 = new SavingsAccount(31, "Vishal", 200, 700);
let S2 = new CurrentAccount(31, "Sudhangshu", 500, 100);
S1.totalBalance();
S2.totalBalance();
