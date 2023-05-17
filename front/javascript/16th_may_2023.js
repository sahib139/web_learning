// objects 
// these are reference type
// these are se to save data
// array are not sufficient for real world data.

//creation of object 
//they store in key:value pair

const person={
    name:"sahib",
    age:21
};
console.log(person);
//here name is also the string 
//so we also decleared in following manner.
const car={
    "name":"maruti",
    "cost":20,
};
console.log(car);
//here indexing is not use .we use to key insted.
console.log(person.name);
console.log(car.cost);

//NOTE-> key is also know as object properties.
//we can store a array as a value in key value pair.
const student={
    name:['abc','cdef']
};
// person={
//     hobbie:["cricket","table tennis"]
// };--> this will give error because of const.

//to add new key value pair in existing object. 
//method 1->
person.hobbies=['cricket','table tennis'];
console.log(person);
//method 2->
person['height']=171;
console.log(person);

// Hence, object has two types of notation bracket and dot.

console.log(person.height,person['height']);//both gives same value.

//difference between dot and bracket notation.
// if we wanted to add a key which has more then one word.
//then we cannot use dot notation because in that we 
// we don't use inverted commas.
// so here bracket notations are required.

//example->
// we wanted to add key 'course name'
// person.course name='B.Tech';//-> this gives an error.
// so we use bracket notation.

person['course name']='B.Tech';
console.log(person);

// same concept is use while declearing a new object.

const college={
    'college name':'CHUTIYA COLLEGE'//here we cant write
    // college name:'chutiya college'.
};

// now if we wanted to give key name which is saves in a varibale.

const new_key_name='email id';
person["new_key_name"]='cutiya@ok.com';
console.log(person);
// in this person get a new key named as ->'new_key_name'
// but we wanted it's value i.e. email id
// so we not don't use inverted commans while entering key_variable name.

college[new_key_name]='cutiya@college.com';
console.log(college);

//how to iterate in object
//method 1->
// for in loop

//for printing keys;
for(let key in person){
    console.log(key);
}

//for printing value of the keys.
for(let key in person){
    // console.log(person.key);-> this will give undefine 
    //because it check if 'key' key is present in person 
    //object or not.
    console.log(person[key]);
}

// to print key value pair->
for(let key in person){
    // console.log(key,':',person[key]); ->method_1
    console.log(`${key} : ${person[key]}`); //->method_2
}

//method-2 ->

console.log(Object.keys(person)); //this gives array of keys.
// to check if this an array or not.
console.log(Array.isArray(Object.keys(person)));// return true is it is an array.

//we can use for of loop using Object.keys funtion
for(let key of Object.keys(person)){
    console.log(key);
}

//Computed properties. 
// we wanted to create the oject using key ,and values 
// stored in the variable.

const key1='ok1';
const key2='ok2';

let value1='okok1';
let value2='okok2';

//creating object using key1,key2,value,value2;
const obj={
    // key1:value1 //-> this gives the 'key1' as a key name.
    [key1]:value1,
    [key2]:value2
};// declearing in this form is called computed properties.
console.log(obj);

// we also do this by first declearing oject as empty.
//then adding the key :value .
const obj1={};
obj1[key1]=value1;
obj1[key2]=value2;
console.log(obj1);


//spread operator.(...)
const arr1=[1,2,3];
const arr2=[2,3,4];
const newarr=[...arr1,...arr2,4,5];
console.log(newarr);

//(...)->we can use spread operator in any datatype which can
// be iterarated.
const okletsee=[..."12345"];
console.log(okletsee);

//note -> if we use same key more then one time in the 
//creating or declearing the object ; then the last value 
// which we enter in the key is subjected to key :value pair.

const testing={
    key1:"val1",
    key2:'val2',
    key1:'val3'
};
console.log(testing);// in this key1 has value val3.

//spread operator in ojects.
const newobj={
    ...person,// first all the key:value pair of person is added ,then 
    ...college// all college object key:pair added.
};
console.log(newobj);

const test1={
    ..."abc",
};//here ...abc is spread in making its index as key , and value 
// is the value at that index.
console.log(test1);//{0:'a',1:'b',2:'b'};

const test2={
    ...['it1','it2']
};
console.log(test2)//{0:'it1',1:'it2'};

