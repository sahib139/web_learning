function ok(){
    let count=0;
    return function(){
        count++;
        if(count<=1){
            console.log("call kara mujhe");
        }
        else{
            console.log("Ab mat call karna");
        }
    }
}

const myfucn=ok();
myfucn();
myfucn();
myfucn();
const fun=ok();
fun();
fun();