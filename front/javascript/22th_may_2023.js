//consider this a single user data in the following object.

const user1={
    first_name:"Sahib",
    last_name:"Singh",
    email:"anything@something.find",
    age:1,
    address:"home_house_myhome",
    about:function(){
        return `${this.first_name} is ${this.age} years old.Email is ${this.email} and address is ${this.address}`;
    },
    is18:function(){
        return this.age >= 18;
    },
}
console.log(user1.about());
//Asume we have to create 1000 such user like .
//Then by declearing the above mention way will be very hectic .
//That's we will be making a function will be returning a object user which takes parameter such as first_name,
//last_name,email,age ,address and return a object corrosponding to each user.
//so we function that 1)create a object.
// 2) add key value pair.
// 3) return the created object .

const createuser=function(first_name,last_name,email,age ,address){
    const user={};
    user.first_name=first_name;
    user.last_name=last_name;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return `${this.first_name} is ${this.age} years old.Email is ${this.email} and address is ${this.address}`;
    };
    user.is18=function(){
        return this.age >= 18;
    };
    return user;
}// this is the comman we wanted . using this we can create a new user simply by passing detail of the using as a 
// parameter.

const user2=createuser("abc","def","abc@def.co",2,"notok");//get a new object.
const user3=createuser("hij","pqr","hij@pqr.xyz",2,"okok");
console.log(user2.about());
console.log(user3.is18());

//note-> we will try to improve our method .

//since in createuser function we have a same function of all the object (in above case is (about) and (is18) function).
//this take a lot of memory , since we are adding a similar function to each user object.
//To overcome this problem we can create the usermethod object in which we can create all the fucntion which is comman to 
//to all user object and can pass the function reference to each object.

const user_method={
    about:function(){
        return `${this.first_name} is ${this.age} years old.Email is ${this.email} and address is ${this.address}`;
    },
    is18:function(){
        return this.age >= 18;
    },
    sing:function(){
        return "lalala";
    }
}

// now we create a modified createuser function in which we will pass the function reference to each object.

const createuser_modify1=function(first_name,last_name,email,age ,address){
    const user={};
    user.first_name=first_name;
    user.last_name=last_name;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=user_method.about;//this is only the reference (address of the original function).here we only store the address of 
    //of the function.
    // so memory space decrease.
    user.is18=user_method.is18;
    return user;
}

const user4=createuser_modify1("qw12","re12","ffs32@ssd.sf",44,"dsadwedsa");
console.log(user4.about());

//now we will make more change.
//as we can see each user still contains some space to store the reference of the function.
//to nullify this , we going to learn the concept of __proto__

//consider a example ->
const obj1={
    key1:"value1",
    key2:"value2",
}
const obj2={
    key2:"value2",
    key3:"value3",
}
console.log(obj2.key2)//value2 will be printed.
console.log(obj1.key1)//value1 will be printed.

//but if try to to access obj2.key1 -> give undefined.
console.log(obj2.key1);
//But we don't want undefined value . //we want that if obj2 don't have any key(here key1) then look in another
// oject (in this case obj1).
//to do this we use the concept of (__proto__ / [[prototype]]).

//we able to create a empty object like this
//const obj={};--> this way.

//But if we wanted to use the concept of __proto__ , we create object using following manner.

const obj2_new=Object.create(obj1);//here oj2_new is created and here obj1 means that if we try use any a key which is 
// not present in the obj2_new then we will be searching the same key in obj1.
//   THIS RETURN THE EMPTY OBJECT {}.

obj2_new.key5="value5";
console.log(obj2_new.key5);//--> prints the value5 form key5 in obj2_new.
console.log(obj2_new.key1);//-> prints the value1 form key1 in obj1.
//now if we add key1 in obj2_new,
obj2_new.key1="value11";
console.log(obj2_new.key1)//prints the value11 form key1 in obj2_new.
//as first the key is check in main object and we don't able to find such key then we will be search the same key in
//__proto__ object.
console.log(obj2_new.__proto__);//prints the obj1.


// now we will be using this concept in above createuser function.

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
const createuser_modify2=function(first_name,last_name,email,age ,address){
    // const user={};--> we will be changing this.
    const user=Object.create(user_method);//now if we call any function ,and we don't decleared in this user object 
    //which we are returning to each user . Then it will be checking in user_method object which contains all
    // function related to user_objects. 
    user.first_name=first_name;
    user.last_name=last_name;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}

const user5=createuser_modify2("ok1","ok2","ok1@ok2.notok",0,"cant_find");
console.log(user5.about());