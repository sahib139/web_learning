//if ,else 
let ok1=3;
if(ok1>4){
    console.log("yes");
}else{
    console.log("no");
}

// we can take input using prompt 

let age=prompt("enter the age:");
console.log(typeof age);//prompt will always take input in form of string.
console.log("Age u enter is :",age);
// if we want to convert string into number we can add plus sign in front
// of it.
let age1= +prompt("enter your real age:");
console.log(typeof age1,age1);

//if ,else if ,else.
if(age1<=5){
    console.log("Abhi baccha hai tu.");
}else if(age1<18){
    console.log("Thoda aur bada ho ja.");
}else{
    console.log("chal aja ab vote dena");
}

//tenary operator -> work as if-else.

let check= age>4 ? "YES": "NO";
console.log(check);

// or(||) , and(&&) operator 
// nested if else 

if(age1>17 && age<4){
    console.log("ok get inside");
}else{
    console.log("i give one more chance");
    let anscheck= prompt("Enter the sum or multiplication of 4 and 5");
    if(anscheck==9 || anscheck==20){
        console.log("chal chup chap andar aa ja");
    }else{
        console.log("meri ankho ke samne sa chala ja");
    }
}

// switch case -->work similar to c/c++.

let day=2;

switch (day){
    case 0:
        console.log("Monday");
        break;//if we dont use break and day has value 0 ; then
        // case 0 will execute and all the case after case 0 will
        // also be executing.
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    default:
        console.log("BLA BLA");
}

// LOOPS

//while loop
// work similar to c/c++.
let i=0;
while(i<5){
    console.log(i);
    i++;// i=i+1;
}

//for loop 
// work similar to c/c++.
for(let j=0;j<=5;j++){
    console.log(j);
}
// note here in for loop , since we declare i variable in for loop 
// using let keyword , so we cannot use i outside for loop.
// but is use (var) to declare i insted of let.
// then we will be able to use i variable outside the for
// loop block.

//do while loop
// work similar to c/c++.
i=3;
do{
    console.log(i);
    i--;
}while(i>=0);

console.log("BREAK and CONTINUE STATEMENT");
//break , continue statement
for(let i=0;i<10;i++){
    if(i==5)break;
    if(i==2)continue;
    console.log(i);
}

// ARRAYS

//array
//similar to c/c++.
//here array is refrence type (typeof object);
//data types other then primitive are object type.

let fruits= [];//declearation of array variable.
console.log(typeof fruits);// this give object as output.
// if we wanted to check that this oject is an array . 
// we can do this by following way.
console.log(Array.isArray(fruits));//gives true if given parameter is 
// of array type.

//note --> array is mutable type.

// we can make array as we see fit (just like python).
fruits=['mango',"banana","orange"];
let num=[1,2,3,4];
let mixed=['abc',123,2.5];
let okletsee=['123',22.5,55,mixed,["ok",12]];
console.log(fruits,num,mixed);
console.log(okletsee);
console.log(okletsee[3],okletsee[4]);//indexing is similar to
// c/c++ . i.e. form 0 to n-1.

// To add new element at last of array we can use.
//push function.
// and to delete last element form array we can use 
// pop function.
// pop function delete the last element and as well return
// the last value also.

fruits.push("graps");// add graps to last of the fruits array.
console.log(fruits);
let deleted_ele=fruits.pop() //-> this deletes the last element of fruits array 
// i.e. graps. 
// and since pop function also return the element so variabe 
// deleted_ele also have value "graps".
console.log(deleted_ele);

// unshift function of array add element in front of the array.
// shift function delete the first element of array.
// these both function work slower then pop and push.
num.unshift(11);
console.log(num);
let del_ele=num.shift();//this also return the deleted element.
console.log(num,del_ele);