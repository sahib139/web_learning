// using the concept of event delegation --> we will working on our to 
// do list to add remove the todo list using single addEventListner.

const sec_todo=document.querySelector(".section-todo");
const input=document.querySelector(".section-todo input[type='text']");
const form_todo=document.querySelector(".form-todo");

// console.log(form_todo);
// form_todo.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("YO");
    
// });

sec_todo.addEventListener("click",(e)=>{
    e.preventDefault();
    //insted of selecting each element one by one in the event triggering domain and checking which one is true.
    // we will be using e.target.classList --> is this list contains the class what we desires then we will 
    //performing action like wise.
    if(e.target.classList.contains("add-todo")){
        let text=input.value;
        input.value="";
        const pre_list=document.querySelector(".section-todo ul");
        // console.log(pre_list);
        pre_list.innerHTML+=`<li><text>${text}</text>
                                <div class="todo-buttons">
                                    <button class="todo-btn done">Done</button>
                                    <button class="todo-btn remove">Remove</button>
                                </div>
                            </li>`
    }
    else if(e.target.classList.contains("done")){
        let text=e.target.parentNode.parentNode.querySelector("text");
        console.log(text);
        text.style.fontWeight="bold";
        let remove=e.target.parentNode.querySelector(".remove");
        let done=e.target.parentNode.querySelector(".done");
        remove.remove();
        done.remove();
    }else if(e.target.classList.contains("remove")){
        const li=e.target.parentNode.parentNode;
        li.remove();
    }
    // console.log(input_text);
});


