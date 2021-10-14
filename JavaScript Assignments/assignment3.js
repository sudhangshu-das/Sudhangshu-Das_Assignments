//Q1. and Q2.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.getArea = function () {
            document.write("Area = " + (this.width * this.height) + "<br>");
        };
    }
}


var R1 = new Rectangle(25, 65);
var R2 = new Rectangle(35, 60);
document.write("R1 width = " + R1.width + " <br> R1 height = " + R1.height + "<br>");
document.write("R2 width = " + R2.width + " <br> R2 height = " + R2.height + "<br>");
R1.getArea();
R2.getArea();


//Q4. and Q5.
class Person { }
var P1 = new Person();
P1.firstName = "Dinesh";
P1.middleName = "Kumar";
P1.lastName = "Tripathi";

document.write("P1 = " + P1.firstName + " " + P1.middleName + " " + P1.lastName + "<br>");

//Q6
var string = '({"firstName":"Dinesh" , "lastName":"Tripathi"})';
var obj = eval(string);
document.write(obj.firstName + " " + obj.lastName);


//Q7.
var string = '{"firstName":"Dinesh" , "lastName":"Tripathi"}';
var obj = JSON.parse(string);
document.write(obj.firstName + " " + obj.lastName);

//Q8 and Q9 
function person(fname, lname, age, skill, dateofbirth, address, married, profession) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.skill = skill;
    this.dateofbirth = dateofbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;

}
var person1 = new person("nikhil", "goud", 22, ['c'], "24/10/1997", { city: "hyberabad", pincode: "521185" }, "false", "sr analyst");
var person2 = new person("harish", "chinna", 21, ['html'], "8/6/1997", { city: "Ammeerpet", pincode: "500038" }, "false", "jr analyst");

print = function () {
    console.log(person1);
    console.log(person2);
}();

amitabh = new person("amitabh", "bachan", 22, ['c'], "24/10/1997", { city: "hyberabad", pincode: "521185" }, "false", "sr analyst")
abhishek = new person("abhishek", 21, ['html'], "8/6/1997", "false", "jr analyst")
var abhishek = Object.create(amitabh);
aaradhya = new person("aaradhya", 20, ['python'], "10/5/2000", "fresher")
var aaradhya = Object.create(amitabh, abhishek);
print = function () {
    console.log(amitabh);
    console.log(abhishek.lname);
    console.log(abhishek.address);
    console.log(aaradhya);
}();


//Q11
class BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
        this.getCurrentBalance = function () {
            document.write(this.accountBalance);
        };
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, isSalary) {
        super(accountNumber, accountHolderName, accountBalance);
        this.isSalary = isSalary;
        this.withdraw = function (amount) {
            this.accountBalance -= amount;
            if (accountBalance == 0)
                return -1;
        };
    }

}

class CurrentAccount extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, odLimit) {
        super(accountNumber, accountHolderName, accountBalance);
        this.odLimit = odLimit;
        this.withdraw = function (amount) {
            this.accountBalance -= amount;
            if (accountBalance < 0)
                return -1;
        };
    }
}

var s1 = new SavingsAccount(50201024, "Dinesh Tripathi", 40000, 1);
s1.withdraw(7500);
s1.getCurrentBalance();






