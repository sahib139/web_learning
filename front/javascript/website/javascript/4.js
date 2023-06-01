//Static list vs live list.

const ul=document.querySelector(".todo-list");
console.log(ul.children);//return a list.
// in this list only one li is showing which don't have any text_node.
//let''s add text node to it.
ul.children[0].textContent="yoo";
//Now let's add one more element to it.
const li_new=document.createElement("li");
li_new.textContent="okok";
//let's append this list item.
ul.append(li_new);//new element (li_new) get appended in the list.

//Now let's select all the list items in the ul element(using querySelecterAll).
const li_list_node_list=ul.querySelectorAll("li");
console.log(li_list_node_list);

//let's select all the list items in the ul element(using getElementBy(something)).
const li_list_html_list=ul.getElementsByTagName("li");
console.log(li_list_html_list);

// WE CAN SEE THAT BOTH THE LIST SHOW SAME RESULT.
// now let's add one more new li element in ul.
const li_new_1=document.createElement("li");
li_new_1.textContent="get back";
//now append this new element to the list.
ul.append(li_new_1);
// now let's check the HTMLCollection list(getElementsByTagName) and NODE list(querySelecterAll).
console.log(li_list_html_list);//return the three elements --> most latest detail of the list.(LIVE LIST)
console.log(li_list_node_list);//return two element --> return the static list when formed only when called.

//SO WE CAN SAY THAT getElementByTagName() returns live list.
// AND querySelectorAll()-> return the static list.

//How to get the dimensions of the element
//eg-> we want to get the dimesions of section todo clas.
const sec_todo=document.querySelector(".section-todo");
const sec_todo_info=sec_todo.getBoundingClientRect()//this gives all the details of the section i.e. height form top (dyanmic-> changes as we scroll);distance form top ,left ; it's x,y coordinates ,etc.
console.log(sec_todo_info);
console.log(sec_todo_info.height);//we can get the height like this also.


//INTRO TO  EVENT

//click
//TO ADD EVENT WE HAVE THREE WAYS -->
//1.) Directly add the javascript code in the onclick attribute of html code(in button tag).
//2.) METHOD 2->

//LET'S select the button on whichwe want to add the event.
const btn=document.querySelector(".btn-headline");
console.dir(btn);
//now this button has a property of onclick -> we can assign the function to onclick property of that button.
// btn.onclick=function(){
//     console.log("you clicked me");
// };// BUT THIS IS ALSO NOT A GOOD PRACTICE -> since in this case we talking about the certain event only.
// We need more generalised method.

//3.) Method 3-> use method addEventListner --> it take two parameter ->1.which type of event (in below case is "click") ;2. function-> what will happen when that event take place.

// btn.addEventListener("click",function(){
//     console.log("Please clcik me once more!");
// });//in this good practice.
//here instead of simple function expression , we can use arrow function
// or simple function .eg->
btn.addEventListener("click",()=>console.log("You touched me!"));

//this keyword using inside above function(which we passes in the addeventlistner);
btn.addEventListener("click",function(){
    console.log(this)//this will return the object form which it's is called upon ---> in this case it is btn.
});
//using this keyword with arrow function -> will return window object -> which the parent of above object.
btn.addEventListener("click",()=>{console.log(this);});
