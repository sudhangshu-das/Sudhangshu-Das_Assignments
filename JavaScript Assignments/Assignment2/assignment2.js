// Q1.
var n = prompt("Enter a value: ");
function composedValue(f1, f2, n){
var value = f1(f2(n));
document.write(value);
}
function square(n){
    return n*n;
}

function double(n){
    return n*2;
}



// Q2.
function compose(f1, f2){
    function newFun(n){
        return f1(f2(n));
    }
    var value = newFun(n);
    document.write(value);
}




//Q3.
var a = [1, 2, 3, 4, 5];
function find(a, test){
    for(i=0; i<a.length; i++){
        if(test(a[i]) == true){
            document.write(a[i]);
            break;
        }
    }
}
function test(n){
    if(n%2 == 0)
        return true;
    else
        return false;
}



// Q4.
var a = [1, 2, 3, 4, 5];
function map(a, f1){
    var b = [];
    for(i=0; i<a.length; i++){
        b.push(f1(a[i]));
    }
    document.write(b);
}




// Q5.
var i = 0;
function find(){
    if(test(a[i]) == true){
        document.write(a[i]);
        return;
    }
    else{
        i++;
        find();
    }
}




// Q6.
var i = 0;
f1 = square;
console.log(map());
function map(){
    if(i == a.length)
    return;
    else{
        document.write(f1(a[i]));
        i++;
        map();
    }
}
