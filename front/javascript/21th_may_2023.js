//methods
//function inside object.

const person={
    firstname:"harshit",
    age:8,
    about:function(){
        console.log("person name is harshit");//we printing in static form

    }
}
console.log(person.about);//prints the function.
person.about();//we can call the function here.

//now we wanted to give name in about function in dynamic form.

const person1={
    name1:"abc",
    age:19,
    about:function(){
        //    console.log(`person name is ${name1} and thier age is ${age}`);   //here name and age is not know since we
        //unable to find the name ,age variable .
        //since by simply writing the key we cannot access its value. we have to give its_object_name.key 
        //to access its value. 
        console.log(`person name is ${person1.name1} and thier age is ${person1.age}`);
        //in this way we can we can do in dynamic type.
        //but it is not correct method.
        
        //    we use ((this)) instead of writing the static name (directly writing the object name);
        //    this -> signifies the object form where (form which object )this function is call from.


        console.log(`person name is ${this.name1} and thier age is ${this.age}`);
        //this is correct method.

        //if we simply print the this then whole object will be printed form where this function is called.
        console.log(this);
    }
}
person1.about();

const print_detail=function(){
    console.log(`This product is a ${this.product_name} .It is ${this.type_of_appliance} type. It cost ${this.price} rupees.`);
}

const item1={
    product_name:"fan",
    type_of_appliance:"electronic",
    price:3000,
    about: print_detail,//we can also declear function outside the object domain.
}
console.log(item1.about);//this print the about function.
item1.about();//this runs the function about and using this ---> item1 as it's origin object.

const item2={
    product_name:"car",
    type_of_appliance:["Electronic","Mechanical"],
    price:500000,
    about: print_detail,
}

item2.about();//this runs the function about and using this ---> item2 as it's origin object.

// All about this.

//firstly ->
// all javascript function which we decleare in our javascript file commes under the biggest javascript object i.e. window.
//  Since this -> keyword points to it's parent object . As we can see from above example that after using this keyword in 
// item1 ;this keyword point to item1. so if we print the this keyword in item1 object then item1 will be scene as result.

// so if we simple print this key word in main file . i.e.->
console.log(this);//here this keyword parent is window since it is the biggest object in which all the javascript function
//comes under.


// const person1={
//     name1:"abc",
//     age:19,
//     about:function(){
//         console.log(`person name is ${this.name1} and thier age is ${this.age}`);
//     }
// }
//as above about function is decleared in person1 object.
// so if we wanted to execute this about function we have to write person1.about();

//similarly if we decleared a function i.e.->

function myfunctest(){
    console.log("Hello JavaScript");
}
myfunctest();//this runs the function . //since from earlier disscussion we can say that this myfunctest is the
//part of window object.
//so we can also write like this->
window.myfunctest();//this also print the same result i.e. Hello JavaScript.
this.myfunctest();// we can also print like this. -> since we are inside the window object.
//but printing this way is not necessary .
//if wanted to make compulsory to wirte like this then we use ('use strict') line at the top of javascript file.

// call , apply  ,bind. -> these three function used for following purpose.

//call -> this is used when we wanted to use function of someobject but using the value for the variable form diferent object.
//i.e. this -> belongs to different object , not to object by which object it is called upon.
//eg->

const obj1={
    first_name:"sahib",
    id:1212,
    detail:function(){
        console.log(`The name is ${this.first_name} it's id is ${this.id}`);
    },
}
const obj2={
    first_name:"abc",
    id:1231,
}

const express_the_object=function(random_no){
    console.log(`The person unique no. is is the multiplication of user_id ${this.id} and it's random no. selected ${random_no} id ${this.id*random_no}`)
}

obj1.detail();//-> this run the about() function from obj1 by using it's parent as obj1 since about() is called by obj1.
//i.e. this ===oj1.
//now if we use call.
obj1.detail.call(obj1)//this similar to obj1.about() as about function is call from obj1 and it's parent is taken as the 
//parameter which is passed in call function ; here i.e. obj1.

//now if we use like this
obj1.detail.call(obj2)//here this==obj2.

//we can also passed arguments with call function which is required in the respective function.
express_the_object.call(obj2,2);//we can pass as much parameter as we required i.e. call(object,parameter_1,parameter_2,....).

// (((apply))) is same as (((call))).
// this difference is that , while passing the parameter as we do in call fucntion , we have to pass in form of array.
// writing above line with respect to apply function.

express_the_object.apply(obj2,[2]);//we can pass as much parameter as we required i.e. call(object,[parameter_1,parameter_2,....]).

// bind function.
// this is used to bind the object to this key word by creating a function similar to it.
const detail_obj1=express_the_object.bind(obj1,5);//this fixed the this--->obj1 and random_no-->5 and then save to detail_obj1.

//    NOTE --> don't do this mistake.

const func1=obj1.detail;//since here we don't call the function as we didn't write like this obj1.detial();
// SO , since we don't call the detail function of detail so this keyword also won't be able to recognise it's parents .
//as this keyword find it's parent by knowing from which object funtion function is call form.
//and since no. function is called .
func1;//That's why undefined is see , at their values.

//to do this we have to bind the perticular then save in the variable.
const func2=obj1.detail.bind(obj1);
func2();//this will be printed correctly.

// ((((this in arrow function))))

const test_obj={
    id:12,
    age:21,
    test_func:function(){
        console.log(`the id is ${this.id} and age is ${this.age}`);
    }   
}
test_obj.test_func.call(test_obj);//this work fine ->prints the desired result.
//but it we use arrow function for declearing the test_func insted of simple way or function expression.

const test_obj1={
    id:22,
    age:11,
    test_func1:()=>{
        console.log(`the id is ${this.id} and age is ${this.age}`);
    }
}
test_obj1.test_func1.call(test_obj);//here we get undefined at this.id & this.age place.
//this is because , (this) keyword in arrow function will considered parents to the object which call the obj1 (here).
// means it's grand_parant(here it is window object) is the parent of arrow function .
// if we print this keyword -> window object will be printed.

//eg->

const objj={
    test:()=>{
        console.log(this);//window object will be printed.
    }
}
objj.test();

// const obj_obj={
//     obj:{
//         inside_obj:()=>{
//             console.log(this);
//         }
//     }
// }
// obj_obj.obj.inside_obj(); --> can find out why this prints window object as well .
//Let's check in further moving on.

//note ->

// const objj={
//     test:()=>{
//         console.log(this);//window object will be printed.
//     }
// }
//we can also write above function like this;
// const objj={
//      test():{
//          console.log("this");
//      }
// }
