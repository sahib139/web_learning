//function returning function
//these are also known as higher order function.
function func(){
    function hello(){
        console.log("hello");//here we can return also .
    }
    return hello;//here we are returning a function hello()
    //to func() .
} 
//we can also write the hello function in following order
//i.e. function expression form .
//function func(){
//      return function(){
//          console.log("hello");     
//      }
// }

const hello_duplicate=func();//hello() function get stored in 
//hello_duplicate.
hello_duplicate();//here we calling the hello_duplicate which
//is also a hello() function.
// if hello function is returning some value then we directly
// print the value i.e. console.log(hello_duplicate);
//or we can save that value in some varibale i.e. 
// let value =hello_duplicate();

//importing array method.
//for

const num=[1,2,3,4,5];

function func1(num,index){
    console.log(`index is ${index} and number is ${num}`);
}

for(let i=0;i<num.length;i++){
    func1(num[i],i);
}

num.forEach(func1);//this work similar to above work.
//forEach function of array takes function as an input .
//a callback function.
//this function perform its working according to given 
//callback function for each element in the array.
//forEach function pass index and the element at that index 
//to callback function.

//eg--> for doing summizion in the array of all elements;
let sum=0;
const sums=(num,idx)=>{
    if(idx==0)sum=0;
    sum+=num;
    return;
}
num.forEach(sums);
console.log(sum);

//note->a function without name is called anonymous function.

//eg->
num.forEach(function(num){
    console.log(`${num}*3 : ${num*3}`);
});
//array number multiplication by 3 ; by using anonymous function.

//we use this for each function in object properties accessing.
//eg->
const users=[
    {first_name:"ac",age:21},
    {first_name:"bc",age:22},
    {first_name:"mc",age:11},
    {first_name:"df",age:18},
]//in this we can use forEach function to print all the
//name in the users.

users.forEach(user=>console.log(user.first_name));
//in this way we can use forEach function.
//here we can also use for_of loop or tradition loop.
//but since forEach is oldest function and many programmers
//use it , so we should know this function.

// (((MAP METHOD)))
//array method.
//this function also take the callback function.
//but this always return the value corresponding to all 
//iteration of the array.
//if we don't return any value then undefined get return .
// these all return value comes in form of array.
// so we can store this array.
//eg->

const names=users.map((user=>user.first_name));
console.log(names);//name of all users get stored in the
//name array.

//if don't return any value ->eg->
const ages=users.map(function(user){
    console.log(user.age);
});
console.log(ages);//all array elements have undefined 
//value.

//((((filter)))) function -->
//this also take a callback function
//it should always return boolean value .i.e. true or false
//this function filters the value which and stored in array which 
//have true value.
//eg-> 

const numerics=[1,2,3,54,23,21,314];
const iseven=function(num){
    return num%2==0;
}
const evennumber=numerics.filter(iseven);//stores all the 
//even no's from the numerics array.
console.log(evennumber);

const oddnumber=numerics.filter(num=>num%2!=0);
console.log(oddnumber);

//((reduce)) method ->>
//reduce method also takes the callback function.
//it return the single value;
//eg->

const arr=[1,2,3,4,5];

let sumarr=arr.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
});
console.log(sumarr);
//working of above function.
//iteration  |  accumulator  |  currentvalue |  return
//  1               1               2           1+2=3
//  2               3               3           3+3=6
//  3               6               4           6+4=10              
//  4               10              5           10+5=15
//since accumulator don't have any initial value so it take
//0 index value and current value start from 1st index.

//we can also pass the value of accumulator

// eg->
let sumarr1=arr.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
},0);//->here 0 is the value of accumulator.
console.log(sumarr1);

//working of above function.
//iteration  |  accumulator  |  currentvalue |  return
//  0               0               1           0+1=1
//  1               1               2           1+2=3
//  2               3               3           3+3=6              
//  3               6               4           6+4=10
//  4               10              5           10+5=15

//another eg-->
//sum of all the prices of products in our cart.

const usercart=[
    {productId:100,product_Name:"Mobile",price:120000},
    {productId:210,product_Name:"laptop",price:220000},
    {productId:105,product_Name:"camera",price:325000},
]

const totalprice=usercart.reduce((totalprice,currentproduct)=>{
    return totalprice+currentproduct.price;
},0);
console.log(totalprice);
