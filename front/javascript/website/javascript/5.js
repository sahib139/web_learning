//adding a event to this button (we learned this in previous section)
//Now we will try to add event to multiple buttons.

const buttons =document.querySelectorAll("button");
console.log(buttons);

for(let btn of buttons){
    btn.addEventListener("click",function(){
        let text=btn.textContent.split(" ");
        console.log(`HOW dare you clicked button ${text[1]}`);
    });
}//added events to all the buttons.

//Now we learn about ((EVENT OBJECT))--->

// let's first talk about our web browser 
// web browser have js engine(which execute line by line) and have some extra feature known as (WebAPI).
// browser always listning to the events happening on the page . when an event happend which a user wants 
// (or written in the code) -> then browser send the callback function to js engine to execute  and also send 
// the event details with that callback function --> these event detail comes in form of object 
// And this object is known as event object.

for(let btn of buttons){
    btn.addEventListener("click",function(event_obj){
        console.log(event_obj);
    });
}// ------>>> this event object contains all the details of the event happend.

// Out of all these detail we have have two most important properties.
// (((target))) and ((currentTarget))  -->
// target --> means which element has triger the target.
// currentTarget --> means to which element we attached the eventListner.

for(let btn of buttons){
    btn.addEventListener("click",(event_obj)=>{// With this we can use arrow function --> but not with ""this"" key word.
        console.log(event_obj.currentTarget );// this return the element for which this event is triggered. 
    });
};// in this case target and currenttarget both are same.

// Let's add the change the color of the button when we click on it.
buttons.forEach(btn=>{
    btn.addEventListener("click",(eve)=>{
        eve.currentTarget.style.color="yellow";
        eve.currentTarget.style.backgroundColor="black";
    });
});

//Let's see how events take place in javascript file as we click on it.
// The DOM is a Web API as well and not part of JS. When an event fires from a DOM element that you have attached 
// a listener to (clicking a button you've attached a listener to for example) it will place that listener's callback 
// in the appropriate Queue to be processed by the JS Stack, therefore never entering the queue until the DOM element 
// has been clicked. With this you could have dozens/n number of listeners that the DOM Web API is handling which won't
//  block the single JS thread or enter the queue unless they are specifically interacted with.
// In this way js file first execute itself , completing it's global execution stack , and web api handeling the event's 
// until global stack is finishes . And , after that , event in queue is executed form it's callback function.

// If an event fires from a DOM element but it does not have a listener attached nothing will happen on the stack as no
//  callback will be entering your queue.


// Let's check our above theory with practice.
// we are going to some heavy calculation , with somewhat slow downs the execution speed of the process.
// and at that time we will be seeing the order of execution.

console.log("Scripts begin!!!!");

//adding some button events.
buttons.forEach(btn=>{
    btn.addEventListener("click",(eve)=>{
        let value=0;
        for (let i=0;i<1000000000;i++){
            value+=i;
        }
        let button=eve.currentTarget.textContent.split(" ")[1];
        console.log("you clicked button ",button," and the value generated is ",value);
    });
});
let okvalue=0;
for (let i=0;i<1000000000;i++){
    okvalue+=i;
}
console.log("the outer value is ",okvalue);
console.log("Scripts end here!!!");

// when we save this file , lode the page , as soon the button appears we click on the three of them.
// then their execution order will be.

// 5.js:65 Scripts begin!!!!
// 5.js:82 the outer value is  499999999067109000
// 5.js:83 Scripts end here!!!
// 5.js:75 you clicked button  one  and the value generated is  499999999067109000
// 5.js:75 you clicked button  two  and the value generated is  499999999067109000
// 5.js:75 you clicked button  three  and the value generated is  499999999067109000