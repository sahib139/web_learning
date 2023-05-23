//classes

// const CreateUser=function(first_name,last_name,email,age ,address){
//     this.first_name=first_name;
//     this.last_name=last_name;
//     this.email=email;
//     this.age=age;
//     this.address=address;
// }
// CreateUser.prototype.about=function(){
//     return `${this.first_name} is ${this.age} years old.Email is ${this.email} and address is ${this.address}`;
// }
// CreateUser.prototype.is18=function(){
//     return this.age >= 18;
// }
// CreateUser.prototype.sing=function(){
//     return "lallal";
// } 

// const user1=new CreateUser("abc","pqr","ok@notok.end",0,"okay_i_don't_know");//new keyword
// console.log(user1.first_name);
// console.log(user1.about());

// --------> we have created this type of function using property of __proto__ ,prototype, and using new keyword.

// we can write above form in form function in class form.
// class is similar to function -> internally class into these function only.
// Advantage of class are we can deleared in the function and prototype in same class block.

// we can create CreateUser fucntion using class in the following manner.

class Createuser{
    //we decleare function in constructor.
    constructor(first_name,last_name,email,age ,address){
        this.first_name=first_name;
        this.last_name=last_name;
        this.email=email;
        this.age=age;
        this.address=address;
    };
    //form here we prototype object funtion can be written.
    about(){
    return `${this.first_name} is ${this.age} years old.Email is ${this.email} and address is ${this.address}`;
    };
    is18(){
        return this.age >= 18;
    };
    sing(){
        return "lallal";
    };
    func(a){
        console.log(`The no. we recieved as a parameter is ${a}`);
    }
}//----> in this way we create a class . This is same as we created above using function.
//internally this class is converted into fucntion itself.

const user1=new Createuser("Sahib","Singh","ss0990100@gmail.com",21,"not_found");
console.log(user1); 
console.log(Object.getPrototypeOf(user1));// this is a proof that class is working as function itself ; as all the fucntion outside
//constructor is saved in prototype object.
user1.func(5);

//NOTE---> starting word of class name is also capital , as we do while creating function which uses new keyword .
// variable created using these class are called object(as we know) or instance(of a class).

//  WORKING MORE ON CLASS.

//Let's create a animal class.
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is chewing.`;
    }
    iscute(){
        return this.age<=2;
    }
}

const animal1=new Animal("cat",2);
const animal2=new Animal("cow",5);
console.log(animal1.name);
console.log(animal1.eat());
console.log(animal2.iscute());

//now let's create a Dog class.

class Dog{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is chewing.`;
    }
    iscute(){
        return this.age<=2;
    }
}
const dog1=new Dog('lebra',1);
//As we can see that Dog class is similar to Animal class. So instead of seperatly creating the Dog class we can use 
//Animal class in Dog class   
//----> TO do this we can use extends keyword in class 

class Dog_new extends Animal{

}//---> in this way we can use other class contructor as well functions.
const dog2=new Dog_new('pub',2);//here as we can see , we don't decleared any contructor in Dog_new class
// then also our object is being created.
// SO if we won't able to able to find any constructor or function in sub_class class then we check in parent class.
// HERE Dog_new----> is called class sub_class
// AND Animal ----> is class is called parent or basic class or base class.
console.log(dog2.name);

// now lets create a class Cat which use Animal as parent class.
class Cat extends Animal{
    constructor(name,age,gender){
        // since we adding a gender key in our Cat class so we have to create a constructor of Cat itself.
        // BUT  (name,age) ---> these key are similar to Animal class. To take the advantage of parent class constructor
        // We use ((super))---> keyword to use constructor of class Animal for (name,age)-> class
        super(name,age);// this uses Animal constructor....
        //Now we have to add gender key since it unique for Cat class.
        this.gender=gender;
    }
    run(){
        return `The cat of ${this.name} run at a speed of 5km/hr`;
    }
    iscute(){
        return this.age<=1;
    }// ----> this function name is also present in the parent class.
    // now if we call this function then iscute()--> of Cat class will be called.We ONLY go into parent when we don't find 
    // in sub_bass. 
}

const cat1=new Cat("type1",2,"F");
console.log(cat1);
console.log(cat1.name);
console.log(cat1.run());
console.log(cat1.eat());
console.log(cat1.iscute());//gives false according to the function in Dog_new class.

//   GETTER AND SETTER.

class Circle{
    constructor(radius,x,y){
        this.radius=radius;
        this.x=x;
        this.y=y;
    }
    area(){
        const pi=22/7;
        return `The area of circle is ->${this.radius*this.radius*pi}`;
    }
    get center(){// this get keyword made this center function to access as a key of the object.
        return `The circle's center is (${this.x},${this.y})`;
    }
    set center(cent){
        const [x,y]=cent.split(",");
        this.x= +x;
        this.y= +y;
    }

    change_center(x,y){
        this.x=x;
        this.y=y;
        return this.center;
    }
}
const circle1=new Circle(5,1,1);
console.log(circle1.radius);// we Can use object key by simple writing object_name.key_name.
//But for function we use like this object_name.function_name();
console.log(circle1.area());//like this

// But if we wanted to use like we access the key.
// For this we use get key word with function decleration.
console.log(circle1.center);//-----> this is the function of the cicle1 but we are using like key. We achieve this by 
//using get keyword in front of the function name.

console.log(circle1.change_center(3,3));

// but if we wanted to use circle -> center to change center as well as we change key in object.
// like this  ---> circle1.center="1,2";--> this will set 1-->x and 2---> y;
// To do this we use ((Set)) keyword.
circle1.center="1,2";
console.log(circle1.center);//prints ---> The circle's center is (1,2).

// static method and properties.
//  since we created many fucntion in our class like in Cirlce class we created center object.
// To access these function we have to create a object first using these class ; But we cannot se these fucntion on these 
// class itself.
// like is we do like this
// Circle.center()---> this will throw an error.

// To make a function which only class can call ... 
// We use ((static keyword)) before declearing a function in our class.
//eg-->

class Pen{
    constructor(colour,price){
        this.colour=colour;
        this.price=price;
    }
    static penInfo(){// using the static keyowrd for declearing a class function only.
        return "This is a pen class";
    }
    working_state(){
        return "Can write 10 pages with this pen";
    }
}
const pen1=new Pen("blue",10);
// console.log(pen1.penInfo());// this will throw an error.
console.log(Pen.penInfo());//this will work.
console.log(pen1.working_state());//this will work fine.
// console.log(pen.working_state());//--> this will throw an error.