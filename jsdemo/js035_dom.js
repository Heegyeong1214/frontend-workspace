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
console.log(pNode[0].innerText); //content1 -> pNode[0]에 해당되는 
console.log(pNode[1].innerText); //content2

//textContent: 
console.log(pNode[0].textContent); //content1
console.log(pNode[1].textContent); //content2

//CSS 처럼 JS에서 background 적용 -> 요소객체.style.backgroundColor ="색이름";
pNode[0].style.backgroundColor = "blue";

console.log('=========================')
//부모위치에서 자손 요소의 컨텐츠를 가져올 때 차이 보기(innerText, textContent)
let divNode = document.getElementsByTagName('div')[0];
console.log(divNode);
//divNode.innerText: div에서 보이는 것들만 가지고 옴
console.log(divNode.innerText); // content1  content3
// textContent: div에 있는 모든 컨텐츠 호출
console.log(divNode.textContent); // content1 content2 content3 content4
console.log(divNode.innerHTML); //
//  <p style="background-color: blue;">content1</p>
//   <p style="display: none">content2</p>
//   <p>content3</p>
//   <p style="display: none">content4</p>
console.log('=========================')
//////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////
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




//html에 명시되어 있어서 함수 설정해야함
function process() {
    // alert('click');//클릭 버튼을 눌렀을 때 팝업처럼 뜸(?)
    //form이라는 속성이용할 때 form.frm.fname이라는 이름을 이용하여 접근할 수 있음
    let fname = document.frm.fname; //현재 이름을 입력할 수 있는 이름의 객체를 받아오는 것
    console.log(fname, typeof fname);
    console.log(fname.value); //클릭하면 홍길동 호출, 다른 이름 작성하고 클릭하면 다른이름 호출
    console.log(fname.defaultValue); //홍길동 ; 기본값으로 적용되었음
    return false;


}


