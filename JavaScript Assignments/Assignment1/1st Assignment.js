// Q1. Program that asks the user for a numeber n and prints the sum of the numbers 1 to n
/*
var n = prompt("Please enter a number: ");
var sum = 0;
for (i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);
*/



// Q2. Modify the previous program such that only multiples of three or five are considered in the sum, eg. 3,5,6,9,10,12,15 for n=17
/*
var n = prompt("Please enter a number: ", 17);
var sum = 0;

for (i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        sum += i;
    }
}
console.log(sum);
*/



// Q3. Make a function that returns "even" or "odd" depending on the number passed to it.
function oddEven() {
    var n = prompt("Enter a number");
    if (n % 2 == 0) {
        alert("Number is even");
    }
    else {
        alert("Number is odd");
    }
}



// Q4.
function numberOfFlips(flip) {
    var flip = prompt("Enter the number of flips");
    if (flip == 10) {
        console.log(0.7);
    }
    else if (flip == 100) {
        console.log(0.4);
    }
    else if (flip == 10000) {
        console.log(0.5023);
    }
    else if (flip == 100000000) {
        console.log(0.4999948);
    }
}



// Q5. Program that prints the next 20 leap years
function leapYear() {
    var current = 2021;
    var leap = 0;
    while (leap <= 20) {
        if ((current % 4 == 0 && current % 100 == 0) || current % 400 == 0) {
            document.write(current);
            leap++
        }
        current ++;

    }
}



// Q6. 
function printHello(){
    var str = prompt("Enter a string");
    var strArray = str.split(" ");
    for(i=0; i<strArray.length+4; i++) {
        document.write("*");
    }
    document.write("<br");
    for(i=0; i<strArray.length; i++){
        document.write("* " + strArray[i] + " * <br>");
    }
    for(i=0; i<strArray.length+4; i++){
        document.write("*");
    }
    document.write("<br>");
}




// Q7.
function currency(){
    var amount = prompt("Enter the value in dollars:");
    document.write((amt*74.28)+ "INR (Indian National Rupee <br>" + (amt*109.14)+" Yen (Japanese Yen) <br>" + (amt*0.84) + "Euro <br>*" + (amt*0.72) + "Pount sterling <br>");
}



// Q8. 
function arrConcatenate(){
    var arr1 = ['a', 'b', 'c'];
    var arr2 = [1, 2, 3];
    document.write(arr1.concat(arr2));
}




// Q9.
function altConcat(){
    var str1 = ['a', 'b', 'c'];
    var str2 = [1, 2, 3];
    var str = [];
    var a=0;
    var b=0;
    for(i=0; i<str1.length + str2.length; i++){
        if(i%2 == 0){
            str[i] = str1[a];
            a++;
        }
        else{
            str[i] = str2[b];
            b++;
        }
    }
    console.log(str);
}




// Q10.
function printFibbo(){
    var a=1, b=1, c;
    for(i=0; i<100; i++){
        document.write(a + "<br>");
        c = a+b;
        a=b;
        b=c
    }
}




// Q11.
function arrReverse(){
    var arr = [4, 32, 28, 87, 82, 24, 61];
    var temp, n = arr.length;
    for(i = 0; i < n/2; i++){
        temp = arr[n-i];
        arr[n-i] = arr[i];
        arr[i] = temp;
    }
    document.write(arr);
}




// Q12.
function longestToken(str){
    var result = ' ';
    var a = 0, list = [];
    for(i=0; i < str.length; i++){
        if(str[i] != 'a' && str[i] != 'b'){
            var temp = '';
            for(j=i; j<str.length; j++){
                temp += str[j];

                if(str[j+1] == 'a' || str[j+1] == 'b'){
                    list.push(temp);
                    break;
                }
            }
        }
        else{
            continue;
        }
    }
    for(k=1; k<list.length; k++){
        var max = list[0].length;
        if(max < list[k].length){
            result = list[k];
        }
    }
    console.log(result);
}
longestToken('ababcdababefgababhiab');




// Q13.
function Loops(){
    var a = [8, 22, 18, 83, 72, 88];
    var s1=0, s2=0, s3=0, n = a.length;
    for(i=0; i<n; i++){
        s1 += a[i];
    }
    i=0;
    while(i<n){
        s2 += a[i];
        i++;
    }
    i=0;
    do{
        s3 += a[i];
        i++;
    } while(i<n);
    document.write("For loop: " + s1 + "While Loop: " + s2 + "Do-While Loop: " + s3);
}




// Q14.
function random(){
    var a = [23, 8, 19, 77, 81, 99, 18, -23, -12, -35];
    var max = Math.max(...a);
    var min = Math.min(...a);
    var even, odd, avg, sum = 0;
    for(i=0; i<a.length; i++){
        sum += a[i];
        if(a[i]%2 == 0){
            even++;
        }
        else{
            odd++;
        }
    }

    document.write("maximum=" + max + "minimum=" + min + "sum=" + sum + "average= " + sum/a.length);
    if(even>odd){
        document.write("Even");
    }
    else{
        document.write("Odd");
    }
}




// Q15. 
function sort(){
    var a = [25, 18, 29, 87, 30, 10, 8, 38, 90, 12, 19, 11, 15, 45, 67, 72, 30, 17, 20];
    var temp;
    var n = a.length();
    for(i=0; i<n-1; i++){
        for(j=0; j<n-i-1; j++){
            if(a[j] > a[j+1]){
                temp = a[j+1];
                a[j+1] = a[j];
                a[j] = temp;
            }
        }
    }
    for(i=0; i<n; i++){
        document.write(a[i] + " ");
    }
}

