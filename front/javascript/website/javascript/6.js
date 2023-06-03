// Keypress event
// mouseover event.
//mouseout event. 

//let's create a event to check which key user presses during thier stay at the webpage.

// const body=document.body;

// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);// in key property of event object , the key user presses is present.
// });

// const btn=document.querySelector(".btn-headline");
// btn.addEventListener("mouseover",(e)=>{
//     btn.style.backgroundColor="green";
// });
// btn.addEventListener("mouseout",(e)=>{
//     btn.style.backgroundColor="yellow";
// });

//  woking on file (((2.html))) --->

//event bubbling / event propogation
// event capturing 
// event delegation

// event bubbling is concept of triggering all the similar events form the target element node then 
// propogating towards the outermost element node. 

// event capturing is a concept of triggering all the similar events form the outermost element node 
// then propogating towards the target element node , and ending their.

// cycle follows ->> all capuring events happens first -> then all bubbling event take place.
//outermost node to innermost node --(then)--> innermost most node to outmost node element.
//here innermost referrs to element form where the event triggers.

// to perform the capturing event , add the parameter (true) in the addEventListner method ->
//i.e. --> element.addEventListener(callback,ture);--> for captuing event.
// for event bubbing --> it's simple --> element.addEventListener(callback);

const body=document.body;
const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");
// console.log(body,grandparent,parent,child);

// document.body.addEventListener("click",()=>{
//     console.log("captured body");
// },true);

// grandparent.addEventListener("click",()=>{
//     console.log("captured grandparent!!");
// },true);

// parent.addEventListener("click",()=>{
//     console.log("captured parent!!");
// },true);

// child.addEventListener("click",()=>{
//     console.log("captured child!!");
// },true);

// document.body.addEventListener("click",()=>{
//     console.log("bubble body");
// });

// grandparent.addEventListener("click",()=>{
//     console.log("bubble grantparent");
// });

// parent.addEventListener("click",()=>{
//     console.log("bubble parent");
// });

// child.addEventListener("click",()=>{
//     console.log("bubble child");
// });

// from above addEventListner methods you can learn how event bubbling and captuting works.

//Now comes the event delegation ---> in this concept --> we using the event bubbling.

// We can add the single event listner to outermost element (till where we wanted to listen) .
// So , when the the event triggers from the inner element (inner of outermost element where event listner is addded)
// It's all trigger the callback fucntion of the outemost event ->> where we added the event listner.
// using the concept of event bubbling.
// By this event deligation concept we can reduce the use of event listner fucntion i.e. not adding to the every element but 
// insted using this event delegation concept to reduce the complexity.


grandparent.addEventListener("click",()=>{
    console.log("bubble grantparent");
}); // when we add this event listner to grandparent class and , now if we click inside this (anywhere inside the grandparent class)
// so this event will trigger due to event bubbling or event delegation concept.
// now come the point --> who triggers the event and form where it triggers.

grandparent.addEventListener("click",(e)=>{
    console.log(e.target);// this will tells us form these this event got tiggered.
    console.log(e.currentTarget);// this will tells us who trigger the event.
}); 

//Now we will be doing some work on 1.html file and using the concept of event delegation.