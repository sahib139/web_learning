//javascript is synchronus single thread language .
// here synchronus means one task not starts to execute until previous task is executed completely.
// And single threaded means we can execute one thing at a time.

// some features are provided by web browser API's to perform javascript to perform in asynchronus mode.

// setTimeout---> this function take a callback function as an input , time elapsed (in milisecond).
// when javascript engine encounter this statement -> it send to web API to perform it's execution.

// web API keeps the callback function to themselves until given time ellapsed completely.
// then they send this callback fuction(which passed to setTimout function) to callback queue.
// then event loop check the execution stack .ie. if it is empty or not.
// if it is not empty then all the callback functions wait's in the queue.
// And as soon as stack becomes empty , then event loop send these callback function one by one to get execute 
// in execution stack(callstack).

// console.log("scripts starts");

// setTimeout(() => {
//     console.log("welcome again");
// }, 1000);// if we make the timeout --> 0ms then also it will be going to execute at last
// because , it's firstly go to web api(for 0ms) and then callback queue and wait their untill global execution is over .ie,
// execution stack is empty , then event loops send this callback function to callstack to get executed.

// console.log("script ends");
// print order -->
// scripts starts
// script ends
// welcome again

//NOTE --> setTimeout also return a id -> it's unique id.

// const id1=setTimeout(()=>{
//     console.log("yo");
// },0);
// console.log(`id is ${id1}`);
// print order -->
// scripts starts
// script ends
// id is 2
// yo --> added it's callback to callback queue at 0ms. 
// welcome again --> added it's callback to callback queue at 1000ms.

//clearTimeout(id);--->
// we can use this setTimeout id to clear their callback function form webapi or callback queue.
// using clearTimeout() function.

// clearTimeout(id1);
// print order -->
// scripts starts
// script ends
// id is 2 
// welcome again -->

// setInterval()---> this take a callback function as input amd interval time (after how
// much time does this callback function is to execute one again.) -->add the same 
//callback function again and again the callback queue after given interval.
// setInterval(() => {
//     console.log("yo");
// }, 1000);

// let val=0;
// for(let i=0;i<100000000;i++){
//     val+=i;
// }
// console.log(val);
// console.log("ends");
//print order-->
//scripts starts
// script ends
// id is 2
// 4999999950000000
// ends
// welcome again
//  yo(keeps on printing this)

// callback function in general
// a function that is passed as parameter to another function.

// function func1(callback){
//     console.log("INSIDE 1");
//     callback();
// }
// function func2(){console.log("INSIDE 2");}
// func1(func2);

// function myfunc1(callback){
//     console.log("in 1");
//     callback();
// }
// myfunc1(function(){
//     console.log("in 2");
// });

// function getTwoNumbersAndAdd(num1,num2,perform,error){
//     if(typeof num1 =="number" && typeof num2=="number"){
//         perform(num1,num2);
//     }else{
//         error();
//     }
// }
// getTwoNumbersAndAdd(4,5,function(a,b){
//     console.log(`sum is ${a+b}`);
// }, ()=>{
//     console.log("Please enter the proper argument!")
// });

//  we have to change the ok{1<=i<=6} text and color after some time(given) with respect
// to previous chnage.

// text      Delay    color
// one        1s       Violet
// two        2s       purple
// three      2s       red
// four       1s       pink
// five       3s       blue
// siz        1s       brown

// we can do this using two ways ->
// 1. setTimeout function or using callback function.

const ok1=document.querySelector(".ok1");
const ok2=document.querySelector(".ok2");
const ok3=document.querySelector(".ok3");
const ok4=document.querySelector(".ok4");
const ok5=document.querySelector(".ok5");
const ok6=document.querySelector(".ok6");

// callback hell  // pyramid of doom
// setTimeout(()=>{
//     ok1.textContent="Heading 1";
//     ok1.style.color="violet";
//     setTimeout(()=>{
//         ok2.textContent="Heading 2";
//         ok2.style.color="purple";
//         setTimeout(()=>{
//             ok3.textContent="Heading 3";
//             ok3.style.color="red";
//             setTimeout(()=>{
//                 ok4.textContent="Heading 4";
//                 ok4.style.color="pink";
//                 setTimeout(()=>{
//                     ok5.textContent="Heading 5";
//                     ok5.style.color="blue";
//                     setTimeout(()=>{
//                         ok6.textContent="Heading 6";
//                         ok6.style.color="brown";
                        
//                     },1000);
                
//                 },3000);
//             },1000);
        
//         },2000);
//     },2000);

// },1000);

let chnage_text_and_color=function(obj,text,color,time,perform,error,callback){
    setTimeout(()=>{
        if(obj){
            perform(obj,text,color);
            callback();
        }else{
            error();
        }
    },time);
}

function perform(obj,text,color){
    obj.textContent=text;
    obj.style.color=color;
}
function error(){
    console.log("null object found!!");
}
// text      Delay    color
// one        1s       Violet
// two        2s       purple
// three      2s       red
// four       1s       pink
// five       3s       blue
// siz        1s       brown

//THIS REFERRS TO CALLBACK HELL OR THE PYRAMID OF DOOM!!!!!
chnage_text_and_color(ok1,"heading 1","violet",1000,perform,error,()=>{
    chnage_text_and_color(ok2,"heading 2","purple",2000,perform,error,()=>{
        chnage_text_and_color(ok3,"heading 3","red",2000,perform,error,()=>{
            chnage_text_and_color(ok4,"heading 4","pink",1000,perform,error,()=>{
                chnage_text_and_color(ok5,"heading 5","blue",3000,perform,error,()=>{
                    chnage_text_and_color(ok6,"heading 6","brown",1000,perform,error,()=>{
                        console.log("FINISH!!");
                    });
                });
            });
        });
    });
});
