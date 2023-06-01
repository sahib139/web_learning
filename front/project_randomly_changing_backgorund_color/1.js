const main_btn=document.querySelector("button");
const body=document.body;
const h1=document.querySelector("h1");

function generate(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    const random_color=`rgb(${red},${green},${blue})`
    return random_color;
}

main_btn.addEventListener("click", (eve)=>{
    let val=generate();
    h1.textContent=`Current color:${val}`;
    body.style.backgroundColor=val;
    
});
