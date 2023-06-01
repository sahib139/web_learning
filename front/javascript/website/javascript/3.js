//CLASSLIST METHOD OF element OBJECT
// this method tells and return a object_list which contains all the classes present inside the tag/class/element

//Let's select the class (section-todo) and check how many classes are present inside that class
const sec_todo=document.querySelector(".section-todo");
console.log(sec_todo);//return the section-todo class object
//let's check how many classes is present in the this class
//for this we use classList
console.log(sec_todo.classList);//return two class in list form and the name of the class in which these classes are 
//present in form of value.

// let's add a new class under this class (a class is present in the css file with name .bg-dark)
//we can use this .bg-dark file to add in this class.
sec_todo.classList.add("bg-dark");
console.log(sec_todo.classList);//bg-dark --> class is added

//we can also remove a class 
sec_todo.classList.remove("bg-dark");

//If we wanted to check if the certian class is present or not -> we can do this using contains
console.log(sec_todo.classList.contains("container"));//gives true if present otherwise false.

// toggle method of claslist -> It's check the class given as a argument is present in the list or not.
// if the mention class is present then it will remove it and if not present then it will add that class.
sec_todo.classList.toggle("bg-dark");// first added the bg-dark class 
sec_todo.classList.toggle("bg-dark");// NOw, removed the bg-dark class.

// NOW we will be working on how to add html element jusing javascript
// Earlier we add the HTML code using innerHTML.
//eg-> 
const nav_item=document.querySelector(".nav-items");  
console.log(nav_item.innerHTML);//return all the li tag having navigation.
//lets add a navigation element to sign in
nav_item.innerHTML+="<li class=\"nav-items\"><a href=\"http://www.google.in\">Sign in</a></li>";
console.log(nav_item.innerHTML);
//But this is not the good practice as it every time when we append a new code to it.
// it renders the all the it's class elements form begining. 
// So, it's is not a effective way to append HTMLelement.
//   BUT IT CAN BE USED IN A SITUATION WHEN we wanted to change the whole code ie. overwrite the htmlelements.


// AFFECTIVE WAY IS --->

//METHOD 1->
//dcouemnt.createElement()
//append
//prepend 
//remove

// lets fist create a element node which we wanted to add.
// asume we wanted to add a list item in class section-todo .
// So we li element node.
const li_new=document.createElement("li");
// console.log(li_new);// return --> <li></li> --> with no text
// now to add a text we need a textnode
const text_li=document.createTextNode("hola");// we pass the text , that we wanted to add.
li_new.append(text_li);

//let's select a class to-do in which we will add the new list element we created.
const to_do=document.querySelector(".todo-list");
to_do.append(li_new);
to_do.children[0].remove()// we can delete any element (in this case we deleted the empty li item)

//NOTE--> to add text to some element , we can simple use the method textcontent of that element
//Let's create one more list item
const li_new_1=document.createElement("li");
li_new_1.textContent="hey their!";// this added the text node to li element
//now let's add this item to the top.
//for this we have preappend.
to_do.prepend(li_new_1);//this add item to the begining of the list

// Till now we added li element or removing it form the unordered list.
// BUT if wanted to add any element just before the ul element (before begining of ul)
// or we desire to end ,just after the ul element ended.
//For this purpose we can use before and after method.
const od_list=document.createElement("ol");
const li_1=document.createElement("li");
li_1.textContent="okok!";
//add this item to ol list.
od_list.append(li_1);
// lets add ol element just before todo-list.
to_do.before(od_list);
document.querySelector("ol").classList.add("bg-dark")// added a class to it.

//let's add the same li_1 element after the ul element
to_do.after(li_1);//so li_1 we added to before ul get shifted to after ul element.
// since it don't clone it's . we have to maually clone it , then use that colne element.

//METHOD 2->>
//element.insetAdjacentHTML(where,html_code);
// where --> (following)
//beforebegin
//afterbegin
//beforeend
//afterend

// const to_do=document.querySelector(".todo-list");
// let's add one more element (li)
to_do.insertAdjacentHTML("afterbegin","<li>hello sir1</li>");
to_do.insertAdjacentHTML("beforebegin","<li>hello sir2</li>");
to_do.insertAdjacentHTML("beforeend","<li>hello sir3</li>");
to_do.insertAdjacentHTML("afterend","<li>hello sir4</li>");

//clone NODES

const ul=document.querySelector(".todo-list");
const li_1_new=document.createElement("li");
li_1_new.textContent="I am new!";
//Now let's append this element to ul;
ul.append(li_1_new);
//Now if we prepend this same element, then this li_1_new element which we appended , we be deleted form
//appended places and this element get prepend (But we wanted to clone(copy) itself at prepend position not move it).
// For this we need cloning method.
//We can clone this li_1_new element using
const li_1_new_clone=li_1_new.cloneNode();//in this way we clone
console.log(li_1_new_clone);//But we can se that clonening of text node(it's child node) is done.
// For that we have to do deep clonening . In orther to do so , we have to pass the "true" argument in cloneNode() method.
const li_1_new_clone_1=li_1_new.cloneNode(true);
// console.log(li_1_new_clone_1);//This is want we wanted .
// now we can prepend this element
ul.prepend(li_1_new_clone_1);

//SOME OLD METHODS TO SPPORT POOR INTERNET EXPLORER (AS THESE METHOD (append ,insertAdjacentHTML etc). As these menthod don't work in internet explorer.

//appendcChild;
// insertBefore;
//repaceChild;
// removeChild;

// const ul=document.querySelector(".todo-list"); --> declared earlier
const l1 =document.createElement("li");
l1.textContent="poor IE";
ul.appendChild(l1);// added at the last of the list.

//Now to use insertbefore we need reference element form which we use insertbefore to add the element.
//so firslty -> let's select all the li element.
const li_list=ul.getElementsByTagName("li");//return the list of li tag.
//Now we wanted to add the element before the li having text hola.
//so let's find that li element.
let reference_li;
for(let lii of li_list){
    if(lii.outerText=="Hola"){
        reference_li=lii;
    }
}
console.log(reference_li);//now we wanted to add the new ((l1)) element just before the this reference_li element
ul.insertBefore(l1,reference_li);//in this way we add the new element before reference element.

//replaceChild --> this will replace the exisiting element with element passed in the argument.
ul.replaceChild(l1,li_1_new_clone_1);//we replace li_1_new_clone_1 with l1.

//removechild.
ul.removeChild(reference_li);//removed the referencechild.