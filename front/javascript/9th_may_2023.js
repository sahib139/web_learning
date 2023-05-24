/// Welcome to Javascript or Ecmascript or livescript world.


// "use strict";
//console.log is used to print anything on a console
console.log("Hello world\nok1");

// To decleare a string we can use ('') or ("") or (``);

// Note we can use semicolan at the end of any line or not -> its our wish
// But using a semicolan is a good practice.
// var keyword is used to deleare a variable 
var first_name="Sahib";
var last_name ="Singh";
console.log(first_name,last_name);

// we can declare same variable twice using var
var ok1=2;
ok1=4;
console.log(ok1);
var ok1=3;
console.log(ok1);

//we can also declare variable without using var keyword 
// we should avoid this practice
// to restricting the use of this practice one must use
// "use strict"; --> at the top of javascript file.
ok3=4;
console.log(ok3);

// To avoide declearation of same varibale twice we should use let keyword
// instead of var 
// using let is good practice

let floar=2;
console.log(floar);
// let floar=3; --> this will generate an error
floar = 3;
console.log(floar);


// To declear a constant variable we can use const
const pi = 22/7;
// pi =3; --> this will generate an error.
console.log(pi);

// string indexing 
// In javascript string indexing also start form 0 to n-1 similar to c,c++.
// to print value at any index we use sq bracker

let str="sahib singh";
console.log(str[4]); //print value at index 4 of str string

//string is immutable.
let st="testing string function";
// string function -->
// 1- length function->
console.log(st.length);

// 2- trim funtion ->(delete the whitespaces);
st=st+"  "; // --> two whitespaces are added in st string
console.log(st.length); // length increase by two.

st.trim() //-> this will not make changes in st string , since it is immutable.
console.log(st.length) // -> will print the same length
st =st.trim();
// -> we replace the whole string , not changes the previous string
// this will remove the whitespaces . hence , length decrease by 2.
console.log(st.length);

// 3-> toupperCase();
// 4-> toLowerCase();
// 5-> slice();(require parameter)

console.log(st.slice(1,10));//-> will print the string from index 1 to index 9
console.log(st.slice(1));//-> will print the string from index 1 to last index.

// data types 
// primitive data types are-->
// string
// number
// booleans
// undefined
// null
// BigInt
// symbol

let age= 20;
let str1="1100";
console.log(typeof age);// typeof prints the data type of frther mention variable. Here age --> number.
console.log(typeof str1); //here str--> string.

// to convert a string to number or number to string we do by->
// age = String(age);
console.log(typeof age);
// str1=Number(str1);
console.log(typeof str1);

// we can also do the conversion by->
// to convert a number to string we simply have to add a 
// empty string in the end of the no.
age = age + "";
console.log(typeof age);

// to convert a string into number we simple have to use '+' sign in front 
// of the string .
str1 = +str1;
console.log(typeof str1);

// example
let string1="10";
let string2="11";
let name1=string1 + string2 //this will concatenate the string
let sum= +string1 + +string2; // "10" is converted into 10 and
// "11" is converted into 11;
// sum have a number which is equal to (11+10)=21;
console.log(name1 ,sum);


// now the use of (``) in declearing string

let age1 =21;
let name2 = "sahib";

let aboutme = "My name is "+name2+" and my age is "+age1;
console.log(aboutme);
// we can alse do above thing using (``) and with (${} -> dollar +placeholder).

let aboutme1= `My name is ${name2} any my age is ${age1}`;
console.log(aboutme1);