/*
[문서 객체에 이벤트를 적용하는 방법]
요소선택.이벤트종류 = function(){실행할 문장};
btn.onclick=process;
function process(){};
*/

//
let chk = true;
let divNode = document.querySelector('div');

function process() {
    if (chk) {
        divNode.style.backgroundColor = "blue";
        chk = false; //change를 누를 때마다 색상이 바뀌어야 하니까까
    } else {
        divNode.style.backgroundColor = "red";
        chk = true;
    }
}

let btn = document.querySelector('button');
console.log(btn); //<button>change</button>

//button에서 click 이벤트가 발생하면 process 함수를 실행하도록 등록한다.(실행X) 
btn.onclick = process;

