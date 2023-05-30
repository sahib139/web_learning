// DOM TREE
// for understanding DOM TREE WE CAN REFFER TO THIS LINK --->(https://www.digitalocean.com/community/tutorials/understanding-the-dom-tree-and-nodes);

//LET'S do DOM TRAVERSEL IN (((dom_understanding.html))) page.
//let's access the root node which is document object
const rootnode=document.getRootNode();
console.log(rootnode);//return the document object
console.log(rootnode.childNodes);//return the nodelist of childnode
// Since we can see form dom_understanding.html page that ou document has html a root element of our document node.
const htmlelement=rootnode.childNodes[0];
console.log(htmlelement);//prints the whole html document -> html element is the root element
console.log(htmlelement.childNodes);//-->NodeList(3) [head, text, body]
//this returns the nodelist containing elements nodes(head,body) and text node.

for(let html_child of htmlelement.childNodes){
    console.log(html_child);
}//prints all the child of html element.

const headelement=htmlelement.childNodes[0];
const textelement=htmlelement.childNodes[1];
const bodyelement=htmlelement.childNodes[2];
console.log(headelement.childNodes);// --> prints all the children of the head node in form of node list.
//PRINTS THIS ---> NodeList(5) [text, title, text, script, text]

// let's select FIRST CHILD OF headelement and find it's next siblings
let child_of_headelement=headelement.childNodes[0];
console.log(child_of_headelement.previousSibling);// return null.
console.log(child_of_headelement.nextSibling); // this gives the title element as it's next sibling.
child_of_headelement=child_of_headelement.nextSibling;//now title element is saved in chid_of_headelement.

// if we only want next sibling to find should be element node not the text node , then we can use
// nextELementSibiling.
console.log(child_of_headelement.nextElementSibling);//return script element
// NodeList(5) [text, title, text, script, text]

// let's check parent of child_of_headelement 
console.log(child_of_headelement.parentElement);// return head element.

// Till now we are oing from root node to child node .
// Now let's do opposite it.
//Let's select the the h1 tag and then go to it's parent node.
const h1_element=document.querySelector("h1");
console.log(h1_element.parentElement);//return the parent of h1_element
console.log(h1_element.parentNode===h1_element.parentElement);
const div_1=h1_element.parentNode;
div_1.style.color="green";

// we can also select body by simple doing 
// document.body--> return body
const body=document.body;
console.log(body.childNodes);//--> gives all the child node of the body.--> (element node , text node, comment node)--> gives all node in the nodelist form
// But if we only want the element node , then we can use children insted of childnode
console.log(body.children);//--> gives all the element node in form HTMLCollection.

//Now we learn about DOM TREE , We will be working on index.html page form on in a new file.