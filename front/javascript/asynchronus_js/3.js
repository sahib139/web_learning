// // Promise 
// // this is an object --> it has two values 
// // 1) status : pending(initially)
// // 2) value  : unknown(initially)
// // This promise means that -> it promises to give you a thing(this thing can be any value which user want)
// // Now, intially it's status of it's promise in pending.
// // So, when it goes to complete it's promise -> It check for some condition
// // if those condition were being fulfilled then it's full fill's it's promise 
// // by changing it's status value to resolved and value variable contains the desired result.
// // But, if the mention condition's are not fullfilled then status condition will set to rejected.
// console.log("begin");

// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// //Promise is produced!!!
// const fired_promise = new Promise((resolve, reject) => {// --> take a callback function known as executor function.
//     // --> This executor function take two callback arguments (resolve,reject).     
//     if (bucket.includes('rice') && bucket.includes('salt') && bucket.includes('vegetables')) {
//         resolve("fried rice");
//     }
//     else reject("not have sufficient material");
// });

// //Promise is consumed using then property of promise object.
// // fired_promise.then(  //--> takes two callback fuction as argument ; 1)for resolve the promise ,2) rejecting the promise.
// //     // 1-> For resolve();
// //     (value)=>{
// //         console.log(value);
// //     },
// //     // 2-> For rejecct();
// //     (error)=>{
// //         console.log(error);
// //     }
// // );

// // NOte-> insted of passing two callback function to promise(then property)--> 
// // we can only take care of resolving part .
// // And if the rejection occurs--> then error comes up --> to resolve this error we use .catch property.
// //eg->

// // fired_promise.then(
// //     (value) => {
// //         console.log(value);
// //     }
// // ).catch((error) => {
// //     console.log(error);
// // });// --> catch property to resolve error also take a callback function to execute.

// // NOTE-->
// // This promise is also execute in asynchronus manner --> this is the property of web browser.
// // When js file start to execute , and js engine encounter the promise --> so since engine don't know 
// // anything about promise -> so it sends to webAPI to perform it 
// //then WebAPI execute the promise --> according to the condition in promise --> it sends the resolve or 
// // reject function to ((microtask queue) --> different from callback queue) 
// // So event loop check for the callstack to finish(become empty) (wait for js file to completely execute itself).
// // As soon as the callstack becomes empty then event loop first sends the function present in the microtask queue 
// // one by one and when all the microtask queue becomes empty then event loop sends the callback queue function one by
// // one to callstack(execution stack) to get executed --> HENCE , priority is given to microtask queue when compairing 
// // with callback queue.

// console.log("hello");

// // setTimeout(() => {
// //     console.log("inside settimeout");
// // }, 0);
// console.log("end!!");

// //print order will be -->
// //  begin
// //  hello
// //  end!!
// //  fried rice
// //  inside settimeout


// // Now we have to create a function which will return the promise.
// // we can use the above created promise.

// function fried_promise_func() {
//     return new Promise((resolve, reject) => {
//         if (bucket.includes('rice') && bucket.includes('salt') && bucket.includes('vegetables')) {
//             resolve("fried rice");
//         }
//         else reject("not have sufficient material");
//     });
// }

// fried_promise_func().then(
//         (value) => {
//             console.log(value);
//         }
//     ).catch((error) => {
//         console.log(error);
//     });//--> in this way we can call the promise.

// // promise resolve 
// // promise chaining
// const ok_promise=Promise.resolve(5);

// let ok_promise=new Promise((resolve,reject)=>{
//     resolve(1);
// })
// console.log(ok_promise); //--> this
// console.log(Promise.resolve(1));// --> and this both are same

// let notok_promise=new Promise((resolve,reject)=>{
//     reject("ok");
// })
// console.log(notok_promise);// --> this 
// console.log(Promise.reject(1)); // and this  --> both are same

// Promise.reject("ok").catch((value)=>{
//     console.log(value);
// });
// notok_promise.catch((value)=>{
//     console.log(value);
// })

// Promise.reject("ok").then((value)=>{
//     console.log(value);
// },(value)=>{
//     console.log(value);
// });

// let pro1=Promise.resolve("ok_ji");
// console.log(pro1);
// let return_promise=Promise.resolve("ok_ji").then((value)=>{
//     // console.log(value);
// });
// console.log(return_promise);
// setTimeout(()=>{
//     console.log(return_promise);    
// },0);

// let test_prom=new Promise((resolve,reject)=>{});

// promise chaining.

// const h=document.getElementsByTagName("h1");

// function chnagetext(element,text,color,time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             element.textContext=text;
//             element.style.color=color;
//             resolve();
//         },time*1000)
//     })
// }

// Promise.resolve(1)
// .then(()=>chnagetext(h[0],"one","blue",1))
// .then(()=>chnagetext(h[1],"two","red",2))
// .then(()=>chnagetext(h[2],"green","orange",1))
// .then(()=>chnagetext(h[3],"four","pink",1))
// .catch(()=>console.log("soory!"));

//   --> we can learn on promise form this link->
// https://betterprogramming.pub/understanding-promises-in-javascript-13d99df067c1
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
