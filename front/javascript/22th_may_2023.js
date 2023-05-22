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
    user.about=user_method.about;
    user.is18=user_method.is18;
    return user;
}