//primitive vs reference data type.
//primitive type:
let num1=6;
let num2=num1;
num1++;
//on increasing the num1 value , num2 value don't increases
// beacause first they are decleared in stacked memory.
// and they points to different memory location .
console.log(num1,num2);

//But it is not same with reference type.
//reference datatypes
let array1=[1,2,3];
let array2=array1;
array1.push(4);//on adding the new element in array1.
// array2 also get the new element similar to array1.
//This is because ->firsly they are stored in heap memory.
//since array1 variable stores the pointer which
// points to location of array in heap memory.
// so when we write array2=array1 -> this copy the pointer 
// of array1 to array2. 
console.log(array1);
console.log(array2);

// So how to clone an array.
//METHOD -1 -->
let array3=array1.slice(0);// here we are doing slicing of 
//array1 from 0 to array1.length.
// this creates a new array and then store these slide elements
// in it.
array3.push(5);
console.log(array3,array2);

//METHOD -2-->
let array4=[].concat(array3);
// we can also do above code step by step i.e. 
//1->let array4=[];
//2->array4.concat(array3);
array4.push(16);
console.log(array3,array4);

//METHOD-3-->
let array5=[...array4];//(...)-> spread operator.
array5.push(17);
console.log(array5);

// for loop in array.
for(let i=0;i<array3.length;i++){
    console.log(i);
}

//use const for creating array.

let arr1=[1,2,3,4];
arr1=[3,4,5,6];//in this way someone is able to change our array.
//using same variable we cange pointer 

// but if we use const instead of let in arr1
// after declearing a array it get fixed with a perticular 
//pointer(address) . Now if we change any thing in ;it will be corrosponding 
//to that location only.

const arr2=['OK1','ok1','oK1'];
// arr2=[1,2,3] --> will give error.
arr2.push("ook1");
console.log(arr2);

// for of loop in array
//-> this directly gives the elements of array as we iterate
// in the array .

const fruits=['banana','mango','orange'];

for(let fruit of fruits) // --> similar to -> for(auto fruit:fruits) in c++.
{
    console.log(fruit);
}

//for in loop in array
//->this gives the index of the elements of array , one by one

for(let i in fruits){
    console.log(i);// 0 ,1 ,2 
}

// array destructing 

const myarray=[11,22,33,44];
let [var1,var2]=myarray;// distrbuting myarray value to
// variables var1,var2.
// in above example value at index 0 and index 1 
// get assign to var1, var2.
console.log(var1,var2);

let [var3,,var4]=myarray;
//in above we able to skip index 1 value.
console.log(var3,var4);

// we also using slicing in this.
let [val1,val2]=myarray.slice(2);
console.log(val1,val2);//33,44

//if myarray have less value as compair tp given no. of variable to assign them value.
//then undefine value get saved in the variable.
//example.
const newarr=['ok'];
let [ok_1,ok_2]=newarr;
console.log(ok_1,ok_2);//here ok_2 will have value undefine.

//here we can also use spread operator as a variable.
newarr.push('low');
newarr.push('and');
newarr.push('or');
newarr.push('no');
console.log(newarr);

let [v1,v2,...varr]=newarr;//here we assign value at index 0
// and index 1 to v1, v2 variable  && rest value to varr 
// varible in form of array.
console.log(v1,v2,varr);