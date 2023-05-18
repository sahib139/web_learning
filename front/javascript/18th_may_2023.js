//hoisting 

hello();
function hello(){
    console.log("hello");
}
//this above code i.e. hello(); will not give error.
//((THIS IS CALLLED HOIESTING.))

// this don't work with function expression and arrow function.
// iseven();
// const iseven=function(num1){
//     return num1%2===0;
// }
//--> this will error.

//isodd(); ->this will also give error.
// const isodd= num1 => num1%2===0;

//function inside function.

function app(){
    console.log("welcome into the app");
    const hello=function(){
        console.log("HELLO");
    }
    const size=()=> console.log("18mb");
    hello();
    size();
    //this hello and size function can work inside app only.
}
app();

//lexical scope .
ok2=1;
const mainfunc=function(){
    let ok=0;
    const func1=()=> {
        let var1="yo";
        console.log(var1);
    }
    const func2=function(){
        console.log(ok);// ok is not in func2 function.
        // so now it will check in its parent function.
        // we found ok in mainfunction . we print that value.
        // this is lexical scope.
    }
    const func3=()=>{
        console.log(ok2);//ok2 is not in func3.
        // now check in mainfunc -> not found.
        // now check in global space -> found ok2.
    }
    func1();
    func2();
    func3();
}
mainfunc();

// <-- block scope vs function scope -->
//let and const are block scope 
//var is function scope.

{
    let a=5;
    const b=6;
    {
        console.log(a);//-> this will not give error.
        // this is the concept of lexical scope.
    }
}//this bracket signifies the a block.

// console.log(a); //--> this will give error.
// console.log(b); --> this also give error.
//this is the concept of block scope.

// this variable decleared using let and const stays 
// inside the block.

//but is decleared using var then we can access it anywhere
// in our code . we can considered var as global variable.

{
    var ok=1;
}
{
    console.log(ok);// use ok of above block.
    var ok=2;
    console.log(ok);// use ok of this block.
}// this is function scope .


// DEFAULT PARAMETERS ->

// when default parameter concept is not come.
// we use to overcome this problem by following way.

const sum=(num1,num2) => num1+num2;
console.log(sum(5,4))//passing two no since we require two
// arguments -> till now we done this much.

//but if we pass only one varibale .ie. sum(5)
//then num2 will don't have have any value . so it will be 
// undefine.
// to overcome this problem we use followin way.

const newsum=(num1,num2)=>{
    if(typeof num1==="undefined"){
        num1=0;
    }
    if(typeof num2==="undefined"){
        num2=0;
    }
    return num1+num2;
}

console.log(newsum());//gives 0;
console.log(newsum(4));//give 4;
console.log(newsum(4,6));//give 10;

// now when we default value concept;
const latestsum=(num1=0,num2=0)=> num1+num2;

console.log(latestsum());//gives 0;
console.log(latestsum(4));//give 4;
console.log(latestsum(4,6));//give 10;


// ((REST PARAMETER))->

function myfuc(a,b,c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myfuc(1,2,3);//-> this will work peroperly.
// but if we pass less parameter then we can handel
// using deafult parameter.
// But is their are parameter then req.
//then we w=have to use rest parameter.(use of spread operator.)

function newfuc(a,b,...c){//(...c)-> this is called rest paramet.
    //so first tow arguments goes in a,b.
    // and rest all the arguments goes in c in form of array.
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is :`,c);
    // console.log(`d is ${d}`);
}
newfuc(1,2,3,4,5);

//form a function which can give the sum of all the parameter 
// in a given function.

const sumofalltype=(...a)=>{
    let ans=0;
    for(let num of a){
        ans+=num;
    }
    return ans;
}
let sumall=sumofalltype(1,2,3,4,10);
console.log(sumall);

// parameter destructting.

const person={
    name:"sahib",
    age:"21",
};//created an object.

function propofperson(obj)//properties of the person function.
{
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.height)//this height key is not present.
    // so this will give undefined.
}

//doing above task using concept of destructing.

function propofperson1({name:n,age:a,height:h}){//this is called 
    //parameter destructuring.
    console.log(`${n}\n${a}\n${h}`);//here h will give
    //undefined.
}
propofperson1(person);

// CALLBACK FUNCTION.
// means calling of some function being inside of another function.
// by accepting the parameter of some function into the function in
// which we currenlty in.

const okfun1=(num2)=>{
    console.log("insdie okfun1");
    console.log(num2*10);
    console.log("finish");
}

const okfun2=(CALLBACK,num1)=>{
    console.log("inside okfun2");
    let a=5*num1;
    CALLBACK(a);//this is similar to okfun1(a);
}

okfun2(okfun1,2);