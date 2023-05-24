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
}//-> array is iterable.


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
//key:value pair is stored in the map.
// it is different form object as in object we able to make key of string type only 
// but in in map we can make key of any type -> it can string ,number,object ,array etc.

const mp1=new Map();//way to create a empty map.

mp1.set(0,[]);//set function of map is used to add key:value to map.
//here key value is stored in the map in form of array . 
mp1.set(1,[]);

console.log(mp1.get(0));//get function is used to obtain the value at that key.
//if key passed in get function is not present in the map then it return undefined.

const array1=[1,2,3,4,10,13,15,16,28];

//finding the even odd no in array1 and saving in mp1.
for(let num of array1){
    mp1.get(num%2).push(num);//here mp.get(num%2) -> return the value of key (num%2). which is the array 
    // of even /odd no.
}

//Since their is no indexing in map , so we can not access using tradition for loop which uses
//length function.
//But we can use for of loop to access every [key,value] array from map.

for(let obj of mp1){
    console.log(obj,Array.isArray(obj));//this return array of size two containg [key,value].
    // we can prove this by using Array.isArray(obj). if this return true then it is an array.
}

//way to pass key , value pairs while creating a map.
const mp2=new Map([['name','Sahib'],['age',21]]);//by passing array of array -> each row have two column.
const keeys=mp2.keys();//return the array of keys.
console.log(keeys);

// eg- > we uses map to store some extra info related of our user obj which we don't want to store 
//in user_info object.
const user_info={
    'id':121,
    'gender':'Male',
};
const extra_info=new Map();
extra_info.set(user_info,{'name':'Sahib Singh','height':171});//here user_info is key.
//and it's vlaue is the object containing extra info related the given user.
console.log(extra_info);

//clone using object.assign 

const obj0={
    id:121,
    email_id:"ok121@get.in",
};
const obj1=obj0;
const obj2={...obj0};//by using spread operator.
const obj3=Object.assign({},obj0);//this is the Object.assign function.
//this the older way to colne before spread operator.
//we going to learn more about the this in oops session.
console.log(obj1,obj2,obj3);
obj0['new0']='ok0';
obj1['new1']='ok1';
obj2['new2']='ok2';
obj3['new3']='ok3';
console.log(obj0,obj1,obj2,obj3);
//form this we can clearly see that the obj0,obj1 have same address but obj2,bj3 have different
//addresses.

//optional chaining.

const home={
    "House_no":121,
    "detail":{'area':'new area','city':'ghingustan','pincode':1714},
}
//Here we created object and in the key of object we passed another object.
console.log(home.House_no)//here we accessing the value of key 'house_no.'.
//returns the 121 value.
console.log(home.culture)//there is no such key . so we don't know it's value , so it return
//undefined.

//now ->
console.log(home.detail);//this return the value of detail key which is also a object.
console.log(home.detail.area)//here we accessing the area key of detail object which itself
//the key of home object.
//return 'new area'.

// -->  console.log(home.culture.are_no)          //their is no such key of detial object .
//this return the error.

//but in above case (line:146) return undefined.
//if we want to get undefined value when their is no such key is present .
//then optional chaining is required.
//here we add '?' while using '.' operator to access the value of the key.
//this '?' signifies that if that certian key is present then return it's value.
//otherwise return undefined value.


console.log(home?.culture);
console.log(home?.detail?.area_no);
console.log(home?.culture?.ok);//now this will also give undefined.