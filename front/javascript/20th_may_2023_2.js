//iterables 
//data type on which we can implement for of loop.
//sring ,array are iterables.

//eg->
const name1="SahibSingh";
for(let char of name1){
    console.log(char);
}//-> string is iterable.

const arr=[1,2,'sahib'];
for(let element of arr){
    console.log(element);
}//-> array isiterable.


//non-iterable objects.
const user={
    name:"Sahib",
    age:21,
    gender:"male",
}//-> object is not iterable.
// for(let property of user){
//     console.log(property);
// } --> this will give error .

//   ((SETS)) -->(It is iterable)
// store data
// it has its own method/function.
// No index-based access
// Order is not known
// it contains only unique elements.

//declearationg of set
const st=new Set([5,6,5]);
console.log(st);
st.add(1);//insert the element;
st.add(1);
st.add(2);
console.log(st);
st.add([1,2]);//we can add array also
st.add([1,2]);//this will also be added.
// since set don't add the element which have same address.
//but here [1,2](line:41) && [1,2](line:42) have different.
//that's why set contains two [1,2] array.
console.log(st);
const arrr=[3,4];
st.add(arrr);
st.add(arrr);//this will we discarded since we already add
// the array arrr .(since they belong to same address.)
console.log(st);

//set don't have index.
//But we can iterate using for of loop .
for(let element of st){
    console.log(element);
}//->in this way we can iterate in the set.

//in this length fucntion also not work.
//so we use for of loop for finding length also.
let len=0;
for(let i of st){len++};
console.log(len);

//to find unique elements in array we can do following code.
const myarr=[1,2,2,23,4,5,6,1,4,5];
const unique_element=new Set(myarr);
console.log(unique_element);

// (((MAPS))) object.