let first_name;// in this variable e don't assign any value to it. so this variable will be of undefine type.
console.log(typeof first_name);

let ok1=null;
console.log(typeof ok1);// renonwed error -> since our varibale is of null type , but output is given as object
// so, this is considered as well known error and devlopper work according to it.

// == vs ===
// == -> this only compair the value not along with datatype
let num1="7";
let num2=7;
console.log(num1==num2); // -> this gives true , since value is same .

// === -> this compair the value along with data type

console.log(num1===num2); // -> this gives false , since value is same but data type is different.
let num3=4;
let num4=4;
console.log(num4===num3);//this gives true.

// != vs !== 
// != -> gives true when value are different irrespective of their datatype.
// !== -> gives true when data type or/and value are different.

let n1=4;
let n2="4";
console.log(n1!=n2)// gives false since value is same.
console.log(n1!==n2)// give true since data type is different.

console.log(num1>=n1);//gives true
console.log(num2<=n2);//gives false

