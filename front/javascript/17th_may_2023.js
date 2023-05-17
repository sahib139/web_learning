//object destructing.
const person={
    name:"sahib",
    age:21,
    hobbies:['cricket','Tabble tennis'],
};

console.log(person);

const {ok}=person;//here since their is no indexing . so 
// when we write ok it check that if their is 'ok' key in 
//person object.
// since no 'ok' name key is their. so their is no value 
console.log(ok);
//corrosponding value to it . Thats's why we get undefine.

const {name}=person;//here we have 'name' key in person .
//so name also also become variable to store 'name' key value.
console.log(name);

//if we wanted to change the variable name (not same as key).
const {name:your_name,age:your_life_height}=person;//we can also use let.
// console.log(age); --> this will error now . since no variable
//name 'age' is define.
console.log(your_name,your_life_height);

let {name:fname,...rest_prop}=person;
console.log(fname);
console.log(rest_prop);
console.log(Array.isArray(rest_prop));//this will gives false.
// since rest_prop become object as all left key:value pair.
//get stored in rest_prop object.

//objects inside array.
//these are very useful in real world application.

const users=[
    {User_id:1,firstName:'abc',gender:'male'},
    {User_id:2,firstName:'cdf',gender:'female'},
    {User_id:3,firstName:'hij',gender:'male'},
]
for(let user of users){
    console.log(user.firstName);  
}

//nested destructing.

const [user1,user2]=users;
console.log(user1);

const[{User_id:id1,firstName:name1},,user3]=users;
console.log(id1,name1,user3);

//function declearation.

function sayownername(){
    console.log("SAHIB SINGH\n");
}
sayownername();

// function sum(num1,num2){//num1,num2->parameters
//     return num1+num2;
// }

// let ans=sum(5,4);//5,4->arguments
// console.log(ans);

//taking array as parameter
// finding element in array and if not found return -1.

function findvalue(array,find){
    let let_see=-1;
    for(let i =0;i<array.length;i++){
        if(array[i]===find){
            let_see=i;
            break;
        }
    }
    return let_see;
}

const arr=[1,2,3,4,5];
let check=findvalue(arr,3);
console.log(check);

// ((function expression))

//function sum(num1,num2){
// return num1+num2;
// }
//-> converting this above function into function expression.

const sum=function(num1,num2){
    return num1+num2;
}//-> this is another way of declearing function which is
//similar to above decleared function.

// ARROW Fucntion ..

// function sqofno(num1){
//     return (num1*num1);
// } ->method (1)

// const sqofno=function(num1){
//     return num1*num1;
// } -> method (2)-> funtion expression.

const sqofno= (num1)=> {
    return num1*num1;
} // -> method (3) -> ((ARROW FUNCTION)).
//note -> if we have only one parameter then it's
//neccessory to use () , we can only write parameter i.e.
// num1 without sq_bracket.
// this only works when we have one parameter.
//ex -->
const cubeofno= num1 =>{
    return num1*num1*num1;
}
//we can also write above function in form->
//  const cubeofno = num1 => num1*num1*num1;
//without using {} and return .

//ex->
const iseven = value => value%2 ===0;

//say_hello
const sayhello = () => {
    return console.log("I said hey!");
}

// const sayhello= () => console.log("I said hey!"); ->same as above


const sum_of_two_no= (val1,val2) => val1+val2;
console.log(sum_of_two_no(5,9));


