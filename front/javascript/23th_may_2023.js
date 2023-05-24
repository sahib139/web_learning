//function of javascript have two properties .i.e.
// function ====> function + object.

//consider this simple function.
const hello=function(){
    console.log("hello ji!");
}
hello();//simple 

let function_name=hello.name;//this return the name of the function.
//form this we can see that function also have property of object.
console.log(function_name);//hello function have hello name (o/p -> hello)

// we can add any key:value pair in this function as we do in objects.
hello.ok1="value1";
console.log(hello.ok1);//prints value1.
console.log(hello);

//we can say that function have free space -> is an empty object which is called the prototype.
//so we can say that every function have a empty object know as prototype with a single key called constructor.
//this constructor key stores the function defination.

console.log(hello.prototype);//return a object.
//And in this prototype object our function defination is save as constructor-->key.

hello.prototype.ok2="value2"
console.log(hello.prototype.ok2);//prints value2.
//this creates a key:value pair in prototype object.

console.log(hello.ok2)//don't prints value2 ---> this didn't create in prototype object of function.
//this create object in function itself by considering function as an object.
//that's why it give undefined.

console.log(hello.prototype.ok1); //This is a vice verse case of above statement . This also return undefined .
console.log(hello.prototype);

//NOTE -> [[prototype]] && prototype are diffrent thing .
//[[prototype ]] / __proto__. --> same.
// (((Only function provide this prototype propery .)))

//  IN PREVIOUS FILE WE TRIES TO IMPROVE THE CREATUSER FUNCTION .
// WE TRY TO FURTHER IMPROVE THIS FUNCTION BY USING prototype PROPERTY OF THE createuser() fucntion.

// earlier we are using the user_method object to save the function which is common to all users.
// Now we will be using the createuser prototype(object) to save these method .
// And using __proto__ to find the key which are not present in the created user object , in the createuser prototype object.

//eailer createuser most modified fucntion from previous file-->
//using this user_method object as __proto__.
// const user_method={
//     about:function(){
//         return `${this.first_name} is ${this.age} years old.Email is ${this.email} and address is ${this.address}`;
//     },
//     is18:function(){
//         return this.age >= 18;
//     },
//     sing:function(){
//         return "lalala";
//     }
// }

// const createuser_modify2=function(first_name,last_name,email,age ,address){
//     // const user={};--> we will be changing this.
//     const user=Object.create(user_method);//now if we call any function ,and we don't decleared in this user object 
//     //which we are returning to each user . Then it will be checking in user_method object which contains all
//     // function related to user_objects. 
//     user.first_name=first_name;
//     user.last_name=last_name;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     return user;
// }

const createUser=function(first_name,last_name,email,age ,address){
    const user=Object.create(createUser.prototype);//createUser.prototype ->object .
    user.first_name=first_name;
    user.last_name=last_name;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}
createUser.prototype.about=function(){
    return `${this.first_name} is ${this.age} years old.Email is ${this.email} and address is ${this.address}`;
}
createUser.prototype.is18=function(){
    return this.age >= 18;
}
createUser.prototype.sing=function(){
    return "lallal";
}

const user_final=createUser("sahib","singh","cant@give.sorry",21,"can't_say");
console.log(user_final.about());

//new keyword.
//  1)empty object is created {}===this
//  2)return this object.
//  Object.create(createUser.prototype) -> this also done by new keyword.(__proto__ --> createUser.prototype.)

const obj_new=function(first_name,last_name){
    this.first_name=first_name;
    this.last_name=last_name;
}
obj_new.prototype.about=function(){
    console.log(`Full name is ${this.first_name} ${this.last_name}`);
};
//now when we create object using obj_new fucntion by following manner.
const obj1=new obj_new("sahib","singh");//this create a object 
//here new keyword work in following manner.
//first goes to obj_new function -> then create this = Object.create(this.prototype)(object). -> then make mention keys and add it's value ->
// then return this(object). 
// we can see this obj_new function in following manner.

// const obj_new=function(first_name,last_name){
//     this=Object.create(this.prototype); ------> this line is added by new keyword.
//     this.first_name=first_name;
//     this.last_name=last_name;
//     return this; ------> this line is also added by new keyword.
// }

console.log(obj1.first_name);// prints sahib 
obj1.about()// prints sahib singh

// Now we can modify creatUser function in more advance form.
// Note ---> according to javascript convention when we use new keyword to create any object .
// we use first letter of the function as capital.

const CreateUser=function(first_name,last_name,email,age ,address){
    this.first_name=first_name;
    this.last_name=last_name;
    this.email=email;
    this.age=age;
    this.address=address;
}
CreateUser.prototype.about=function(){
    return `${this.first_name} is ${this.age} years old.Email is ${this.email} and address is ${this.address}`;
}
CreateUser.prototype.is18=function(){
    return this.age >= 18;
}
CreateUser.prototype.sing=function(){
    return "lallal";
}

const user1=new CreateUser("abc","pqr","ok@notok.end",0,"okay_i_don't_know");
console.log(user1.first_name);
console.log(user1.about());

//Since,we can print all the keys of the object by for in loop.
for(let key in user1){
    console.log(key);//but this also prints the __proto__ key/fucntion.
}
//To avoid printing the key/function form __proto__ we can object function ---> hasOwnProperty(key) (take key as parameter).
// if the key passed to user function hasOwnProperty then it return boolean value . True when key is present in the
//object itself and false when key is present in the object but present in the __proto__ (linked object).

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(`${key}--> this is present in the object.`);
    }else{
        console.log(`${key}--> this is not present in the object.`);
    }
}

//   MORE ABOUT PROTOTYPE.
const arr=[1,2,3];//we can decleared the array .
const arr1=new Array(1,2); //we can declared array like this by using new keyword.
//now we can understand that all the array function are stored in the prototype of Array.(like push ,pop)
console.log(Object.getPrototypeOf(arr1));//prints the same as --> console.log(Array.prototype);
console.log(Array.prototype);//this prints the the object which contain all the methods of Array function.
//but we can see that ther object is converted into array.

//i.e. array'S prototype is printed which contains all the Array function.
// we clear this dobut by knowing that we can convert the object into array.

const hello1=function(){
    console.log("YO");
}
console.log(hello1.prototype);//this prints prototype in object form.
// now we can covert this object form prototype into array type prototype.
hello1.prototype=[];
console.log(hello1.prototype);
hello1();//in this way Array function declares it object prototype into array type prototype.