//
//Element(요소) p 지정
let pNode = document.querySelector('#wrap');
console.log(`${pNode.nodeType}, ${pNode.nodeName}, ${pNode.nodeValue}`); //1, P, null -> element는 1로 지정해둠

//Attribute 속성명
//p라는 요소에 저장되어 있는 속성들
let pAttr = pNode.attributes;
console.log(pAttr); //id랑 class 2개;  NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
console.log(pAttr[0]); //id ="wrap"
console.log(pAttr.id); //id = "wrap"
console.log(pAttr.class); //class
console.log(pAttr.length); //2

//id 속성에 대한 정보
console.log(`${pAttr[0].nodeType}, ${pAttr[0].nodeName}, ${pAttr[0].nodeValue}`); //2, id, wrap

//p의 첫번째 자식
let textNode = pNode.firstChild;
console.log(textNode); //"content"
console.log(`${textNode.nodeType}, ${textNode.nodeName}, ${textNode.nodeValue}`); //3, #text, content


//-> 위의 내용은 노트 타입/이름을 알기 위해서 .firstChild처럼 파고 들어갔지만
//p라는 속성은 value가 없고 그냥 content라는 이름을을 가지고 오려면 innerText/Textcontent 사용
console.log(pNode.innerText); //content
console.log(pNode.textContent); //content


//input에는 vlaue라는 속성이 있어서 input이라는 요소를 재지정하고 .value 사용
let fname = document.querySelector('#fname');
console.log(fname.value); //홍길동

