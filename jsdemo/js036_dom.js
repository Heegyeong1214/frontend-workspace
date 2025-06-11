//Node: DOM할 때 생기는 객체라고 보면 됨 -> 12개가 있기는 한데 3개만 알면 괜찮다.
//https://www.w3schools.com/jsref/prop_node_nodetype.asp



let myNode = document.querySelector('#p2'); //현재 기준 설정정

//parentNode 부모를 가지고 올 때 사용
let ptNode = myNode.parentNode; //->pNode의 parent는 div
console.log(ptNode); //<div id="wrap">…</div>
console.log(`${ptNode}`); //[object HTMLDivElement]

//////////////////////////////////////////////////////////////////
//previousSiblig현재 나를 기준으로 해서 내 앞의 이웃을 호출하고 싶어
//p2의 이웃이 p1인데 공백까지 처리됨
let prevNode = myNode.previousSibling;
console.log(`prevNode=${prevNode}`); //prevNode=[object Text] -> 앞의 공백도 TextNode로 해당되서 가지고 옴

//p1을 보려면 공백에서 한번 더 이웃 처리를 해야함
prevNode = prevNode.previousSibling;
console.log(prevNode); //<p id="p1">content1</p>
console.log(`prevNode=${prevNode}`); //prevNode=[object HTMLParagraphElement]

////////////////////////////////////////////////////////////////
//nextSibling: 나를 기준으로 해서 내 다음의 이웃을 호출

let nextNode = myNode.nextSibling;
console.log(`nextNode=${nextNode}`); // nextNode=[object Text] -> Text: 공백으로 적용

//previousSibling과 동일
nextNode = nextNode.nextSibling;
console.log(nextNode); //<p id="p3">content3</p>
console.log(`nextNode=${nextNode}`); //nextNode=[object HTMLParagraphElement]


//////////////////////////////////////////////////
// previousElemnetSibling: 바로 내 전 이웃! 불러오기기
let prevEleNode = myNode.previousElementSibling;
console.log(`prevEleNode=${prevEleNode}, ${prevEleNode.innerText}`); //prevEleNode=[object HTMLParagraphElement], content1

//////////////////////////////////////////////////
//nextElementSibling
let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNode=${nextEleNode}, ${nextEleNode.innerText}`); //nextEleNode=[object HTMLParagraphElement], content3
console.log(nextEleNode);//<p id="p3">content3</p>


///////////////////////////////////////////////////////////////////////
let divNode = document.querySelector('#wrap'); //현재 기준 설정
console.log(`divNod:${divNode}`); //divNod:[object HTMLDivElement]

//childNodes : 내 기준 자식을 가지고 올 때 -> div가 부모이니까 p가 자식이겠지
let divChildesNode = divNode.childNodes;
console.log(`divChildesNode=${divChildesNode}`);//divChildesNode=[object NodeList]
console.log(divChildesNode); //NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text] -> Node이하의 모든 p요소 및 공백백

//children: 내 자식의 요소를 호출
let divChildren = divNode.children;
console.log(`divchildren=${divChildren}`); //divchildren=[object HTMLCollection]
console.log(divChildren); //4개의 요소를 가지고 옴: HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]
console.log(divChildren[0]); //<p id="p1">content1</p>
console.log(divChildren.item(0)); //<p id="p1">content1</p>
console.log(divChildren.namedItem('p1')); //<p id="p1">content1</p> -> 거의 안씀

///////////////////////////////////////////////////
//firstChild: text(공백) , firstElementChild: p1 호출

//기준설정
let pNode = document.querySelector('#p4');

let aNode = pNode.firstChild;
console.log(aNode); // #text(공백)

let imgNode = pNode.firstElementChild;
console.log(imgNode); //<img src="images/gosu.jpg" alt="영화배우 고수"></img>

////////////////////////////////////////////////////////
//요소 안에 속성(Attribute) 지정할 수 있음
//객체.getAttribute("속성명"): 속성명을 가지고 오는 것
//객체.setAttribute("속성명","속성값"); 속성명, 속성값을 지정하기
//(get)객체.속성명: 전체 경로를 가지고 옴
//(set)객체.속성명="속성값";

//img에 있는 src 가지고 오기
let imgAttrNode = imgNode.getAttribute("src");
console.log(imgAttrNode); //images/gosu.jpg: src가 지정한 값을 가지고 옴

imgAttrNode = imgNode.src;
console.log(imgAttrNode); //http://127.0.0.1:5500/jsdemo/images/gosu.jpg -> 전체 경로를 가지고 옴

imgNode.setAttribute('title', '스타배우'); //<img src="", title=""/>이렇게 넣는 것!
imgNode.width = 300;
imgNode.height = 300;


