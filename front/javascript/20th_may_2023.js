//(((sort )))function of array.
//it can also take callback function.

const arr=[23,21,321,5,43,675,2,76];
arr.sort();
//this sort function sort by firstly converting the no into
//the string and then comparing them in lexicographic order.
// arr=['23','21','321','5','43','675','2','76'];
//no this array is sorted in lexicographic order in 
//compair ascci values .
console.log(arr);

//but if we wanted to sort the no. in nromal way.
arr.sort((a,b)=>a-b);
//this function (a,b)=>{return (a-b);} is passed as 
//callback function to sort the numertic values.
//for decreasing we can use this function.
// (a,b)=>{return (b-a);}
console.log(arr);
arr.push(44);
//this sort function make chnages to exsiting array.
// we can avoid this by coping original to new array
const arr1=arr.slice(0).sort((a,b)=>a-b);
//eg->
//prices lowtohigh 
const products=[
    {productsid:1,name:"ok",price:12022},
    {productsid:44,name:"dsa",price:18233},
    {productsid:55,name:"rwe",price:50130},
    {productsid:10,name:"hty",price:14052},
]

const lowtohigh=products.slice(0).sort((a,b)=>a.price-b.price);
console.log(lowtohigh);

//(((( find ))))method.
// this return the first result which matches to the true value 
//of the callback function passes to it.

//since -->const arr=[2, 5, 21, 23, 43, 76, 321, 675, 44];
console.log(arr);
//let's find a three digit no.
let ans=arr.find((num)=>{
    let no=num+"";
    return no.length===3;
})
console.log(ans);//return 321
//if no result is found then undefined will be return .

//let's take a eg of ->
const users=[
    {userID:1,first_name:"ac",age:21},
    {userID:2,first_name:"bc",age:22},
    {userID:3,first_name:"mc",age:11},
    {userID:4,first_name:"df",age:18},
]
//in this we have to we have to find the userID with 4.
const desired_user=users.find(user=>user.userID==4);
console.log(desired_user);

//(((every))) method -->>
//this check whether it is true or false for all the 
//elements in the array.
//it do ((and)/(&&)) of all the boolean value which get after
//doing operation on each element according to callback
//fucntion.

//eg -> to check that the given array elemets have same parity 
//or not.

const arr2=[12,2,4,6,10];
let check=arr2.every((num)=>num%2===0);
console.log(check);//gives true.
//adding a odd element.
arr2.push(1);
//now checking again.
check=arr2.every(num=>num%2===0);
console.log(check);//gives false.

//eg->
// const products=[
//     {productsid:1,name:"ok",price:12022},
//     {productsid:44,name:"dsa",price:18233},
//     {productsid:55,name:"rwe",price:50130},
//     {productsid:10,name:"hty",price:14052},
// ]
//checking that all the prices of the product is lesser
//then 80000;
check=products.every(({price})=>price<80000);
console.log(check);//gives true.

//(((some))) method -->
//this check whether it is true or false for all the 
//elements in the array according to callback
//fucntion.
//it do ((or)/(||)) of all the boolean value which get after
//doing operation on each element according to callback
//fucntion.

const numbi=[1,2,3,3,7,9];
//check that the above array have a even no. or not.

check=numbi.some(num=>num%2===0);
console.log(check);

//eg->
// const products=[
//     {productsid:1,name:"ok",price:12022},
//     {productsid:44,name:"dsa",price:18233},
//     {productsid:55,name:"rwe",price:50130},
//     {productsid:10,name:"hty",price:14052},
// ]
//checking that all the prices of the product is greater
//then 60000;
check=products.some(({price})=>price>60000);
console.log(check);//gives false.

//(((fill))) method -->
//it helps to fill the value desired value in the array.
//we can pass initial value to our new array using fill
//method as well.
//eg-> creating array of 10 size and filling it 0 value.
const my_new_array=new Array(10).fill(0);
//here we can also use like this->
//const my_new_array=Array(10).fill(0);
console.log(my_new_array);

//value , start , end -> three parameter we can pass in array.
//if pass only one value ; then it replace all the elements
//with that value 
my_new_array.fill(2);
console.log(my_new_array);

//if we pass two parameter , then it will replace all the 
// value starting from index given in second parameter to last index
//with the value mention in first parameter.
my_new_array.fill(4,3);
console.log(my_new_array);

//if we pass all the three parameter then first parameter 
//is used to replace all the elements from starting index
//which is equal to second parameter and end at index 
//which is equal to third parameter. 
my_new_array.fill(5,6,9);
console.log(my_new_array);

// ((splice)) method --->

//its helps in deleting /inserting or doing both simultanously.
//inside the array.

//start ,count,insert ->parameter for fill.
//start->from which index we have to delete or insert the  
//the elements.
//count -> form start index how many elements to deleted.
//if count===0 -> then it will delete none.
//insert ->elements to be inserted in array form start 
//index.

console.log(numbi);
//since ->const numbi=[1,2,3,3,7,9];
//deleting
numbi.splice(1,2);
console.log(numbi);//[1, 3, 7, 9]

//inserting
numbi.splice(2,0,10,11,12);
console.log(numbi);//[1, 3, 10, 11, 12, 7, 9]

//deleting and inserting the elements
numbi.splice(1,2,50,60);
console.log(numbi);//numbi=[1, 50, 60, 11, 12, 7, 9]

