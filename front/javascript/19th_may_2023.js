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

