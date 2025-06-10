//document라는 객체가 있음

//id: id라는 요소에서 h1이라는 객체를 받아올거야
let hNode = document.getElementById("selector"); //HTML Element
console.log(hNode);//<h1 id="selector" class="choice">선택자</h1>
console.log(typeof hNode); //객체: object

//class
let hClass = document.getElementsByClassName("choice"); //HTML Collection
console.log(hClass); //HTMLCollection [h1#selector.choice, selector: h1#selector.choice]
console.log(typeof hClass); //object
console.log(hClass.length); //1

//태그명
let pNode = document.getElementsByTagName('p');
console.log(pNode); //HTMLCollection(4)[p, p, p, p]
console.log(pNode.length); //4

console.log(pNode[0]); //<p>content1</p>
console.log(pNode.item(0));  //<p>content1</p> -> HTMLCollection에 item()제공해줌

// innerText: index 에 해당되는 곳(P)의 이름 호출
console.log(pNode[0].innerText); //content1
console.log(pNode[1].innerText); //content2

//textContent: 
console.log(pNode[0].textContent); //content1
console.log(pNode[1].textContent); //content2

//CSS 처럼 JS에서 background 적용 -> 요소객체.style.backgroundColor ="색이름";
pNode[0].style.backgroundColor = "blue";


/////////////////////////////////////////////////////////////////////////////////////
// 위의 내용을 한꺼번에 적용하기: document.querySelector 이용
//
let hId = document.querySelector("#selector"); //css에서 id는 # ; Element
console.log(hId); //<h1 id="selector" class="choice">선택자</h1>

let hData = document.querySelector(".choice"); //css에서 class 호출할 때는 . ;Element
console.log(hData); //<h1 id="selector" class="choice">선택자</h1>

let pList = document.querySelector("p"); // ; HTMLParagraphElement 
console.log(pList); //<p style="background-color: blue;">content1</p>

let pList2 = document.querySelectorAll("p");
console.log(pList2); //NodeList(4) [p, p, p, p]



