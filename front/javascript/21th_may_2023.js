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

const item2={
    product_name:"car",
    type_of_appliance:["Electronic","Mechanical"],
    price:500000,
    about: print_detail,
}

item2.about();

