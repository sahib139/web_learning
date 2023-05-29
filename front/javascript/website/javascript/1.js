//closure

function func(a){
    return function(b){
        return a+b;
    }
}

const let_hope=func(5);
console.log(let_hope);
console.log(let_hope(4));//prints 9
//when we return a function from another function then their function scope variables
//also return with them in the global scope.

//DOM (Document Object Model)
console.log(window.document);// prints in html form 
// here document is a object present in the window object of javascript file
//This document object contains each and every detail of our html file.

//we can use 
console.dir(window.document);//this print the document object in form of the object.
//here we don't have to use the window since it's not neccesary.

//Since we know all the elements of the html is present in the document objeect.
//we can use get element by id
//take input as id--> this function check this id belongs to which element in the html document
// and return then element part in form of object.
console.log(document.getElementById("main-heading"))//this will show object in html form.
console.dir(document.getElementById("main-heading"))//the return in object form
//here main-heading is the id of <h2> tag(manage your task)
const mainHeading=document.getElementById("main-heading");

//Since getElementById only able to get the tag using it's id
// Now we will learn the most efective property of document object , which help to grasp any class
//element , tag form the html document.
//This method is querySelector
//Note->
//for tag -> we simple wrtie the tag name i.e. body , a
//for class -> we use '.' then class name.
//for id -> we use "#" then id name.
console.log(document.querySelector("#main-heading"));
//this select the main-heading.

//for example we have to select header class
console.log(document.querySelector(".header"));
//if their are many classes with same name then queryselector will select the first occurrence while 
//reading the document form top to bottom.

//if want to select all the classes the we can use querySelectorAll 
console.log(document.querySelectorAll(".nav-item"));
//return a nodelist --> array like object
//means we can use for of loop and as well as lenght function.

//Changing text.
//(lets select the <h2> tag text) i.e "Manage for task"--> this text
//For this we can use textcontent method of document object.

const heading_object=document.querySelector("#main-heading");
console.log(heading_object);//<h2> tag element
console.log(heading_object.textContent);//return the text i.e. here -> Manage your task.
//in form of string .
//we can change this text by changing the replacing the string.
//Note-> we can see form above string result that Hello is also showing in the string which 
// is not shown on the html page.(hidden) -> so this means textcontext gives all the text inside the 
//class irrespective of their property mention.

// heading_object.textContent="Let's go and have fun";
// This Change will reflect in the html page.

//If we we only need those text which are shown on the html page then we can use innertext.
console.log(heading_object.innerText);// Now hello will be not shown , since it is hidden.

//change the style of the element.
const obj1=document.querySelector("div.headline");//->> lets select the h2 tag which is inside the headline class
//firstly this will give the div which has as class headline
console.log(obj1);
// now if we have to select h2 tag element in div.headline .
const obj2=obj1.querySelector("h2");
console.log(obj2);

//now we can wirte above two line in 1 command.
const obj3=document.querySelector("div.headline h2")//-> select h2 tag element inside div tag element
// of headline class.
console.log(obj3);

//styling.
console.log(obj3.style);// this shows all the styling properties of the tag element.
//all the css properties.

//lets change the text color.
obj3.style.color="orange";
//since in css to change backgroundcolour
// we write background-color:green;
// in js object style we use backgroundColor="green";
//Note -> "-"--> CHANGES TO WITHOUT SPACE + STARTING  LETTER CAPITAL.
//here in backgroundColour -> space b/w backgroung and color is removed and the C-> letter of color become
//capital.
obj3.style.backgroundColor="#ffff";
obj3.style.border=" 20px solid green";

//get and set attribute.
// attribute is inside the tag element eg-> <a href="">ok</a>
//here href is the attribute of a tag element.
// to get the attribute of the any tag we use getAttribute method of the tag element object.
console.log(document.querySelector(".nav-items a").getAttribute("href"))//-> take the attribute name as the input argument.
//-> this the output of the href value of a tag inside .nav-items class and a tag.
//first found a tag in .nav-item class wil be be selected .i.e. of home.

const obj_1=document.querySelector(".nav-items a");

//set attrbute is used to change the href value.
obj_1.setAttribute("href","http://www.google.in");
console.log(obj_1.getAttribute("href"));
//since it return the string type object .So we can use string properties like slicing and other method.

//another eg-> let's select the input element of class form-todo
const input_obj=document.querySelector(".form-todo input");
console.log(input_obj.getAttribute("type"));//return type value of input tag i.e. text

//get multiple elements using getElements by class name.
//get multiple elements using querySelectorAll.

//BY getElementsByClassName()-->
const li_objs=document.getElementsByClassName("nav-item");
console.log(li_objs);
//this return the HTML Collection --> these are array like object-> means we can use indexing
//BUT this is not an array.
console.log(li_objs[1]);// return the li object at 1 index

//BY querySelectorAll()---->
const li_object=document.querySelectorAll(".nav-item");
console.log(li_object);
//return the NODE_list --> these are also array like object .In this we can use indexing also .
//LIKE-> 
console.log(li_object[1]);//return the li_element in html tag form which is at 1 index.

// NOW let's try changing the color or backgroundcolor of all the <a>tag text 
//first select all the a tag under nav-item class.

const a_objs=document.querySelectorAll(".nav-item a");
console.log(a_objs);//return the NODElist.
//NOW WE can use for loop to traverse to each anchore tag .
//we can use any for loop i.e. for_of , for (traditional one) and forEach(in case of querySelectorAll)
for(let i=0;i<a_objs.length;i++){
    a_objs[i].style.backgroundColor="white";
    a_objs[i].style.color="black";
    a_objs[i].style.fontWeight="bold";
    a_objs[i].style.border="5px dashed grey";
}
//Now doing this with above task with for_of.

for(let obj of a_objs){
    obj.style.backgroundColor="grey";
    obj.style.color="orange";
    obj.style.border="3px dotted red";
}

//Above task with forEach method.
a_objs.forEach(obj=>{
    obj.style.backgroundColor="white";
    obj.style.color="grey";
    obj.style.border="3px solid green";
});

//We can also use getElementsByTagName
// document.getElementsByTagName()---> //this to select all the tag given as function argument.
// And return a HTMLCollection which is also a array like object in which we can use the indexing .

const aobjs=document.getElementsByTagName("a");
console.log(aobjs); 
//NOte-> in these HTMLCollection we can use for_of and for(traditional loop) 
//But we cannot use forEach method .
// aobjs.forEach(obj=>{
//     obj.style.backgroundColor="white";
//     obj.style.color="grey";
//     obj.style.border="3px solid green";
// });
// ------->    throws an error.

//we can use for_of loop
for(let obj of aobjs){
    obj.style.backgroundColor="grey";
    obj.style.color="orange";
    obj.style.border="3px dotted red";
}

// And can also use traditional for loop 
for(let i=0;i<aobjs.length;i++){
    aobjs[i].style.backgroundColor="white";
    aobjs[i].style.color="black";
    aobjs[i].style.fontWeight="bold";
    aobjs[i].style.border="5px dashed grey";
}

// WE CAN ALSO COPY THESE HTMLCOLLECTION OR NODELIST into array object -->
// NOTE-> we cannot convert them into array.
// THis gives more freedom to use all the array method .
// We can convert using Array.from() method.

const array_a_objs=Array.from(a_objs);
console.log(array_a_objs);

// innerHTML --> this method of object ie. perticular class object gives the html language as it is inside the class mention in the argurment.
const div_heading_obj=document.querySelector(".headline");
//this return the object of the div of headline class.
// now we can use innerHTML method in this object.
console.log(div_heading_obj.innerHTML);//gives HTML code.
console.log(typeof div_heading_obj.innerHTML);
// this gives the output as a string which is the html langugae under div(headline) as it is.
// if we make changes in this string as if we writing the html laguage in the html file .
// then this will corrospondes to the html page.

div_heading_obj.innerHTML="<h1>God Tussi Great ho!</H1>";
// this will overwrite all the html code in div(headline clas).
// we can append in this code by simple using this a varibale and adding some code to it.
// eg->
div_heading_obj.innerHTML+="<button class=\"btn_headline\"> okok </button>";
// this will add button after the code already written.
// here --> (\")---> is the escape sequence for writting  inverted commas --> since we cannot direcly use ("")-> so we use escape squence to 
// write them i our text.

