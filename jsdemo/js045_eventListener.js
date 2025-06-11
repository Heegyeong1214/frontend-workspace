//button에다가 2번의 클릭 이벤트 걸거임
//addEventListener() : 같은 이벤트를 여러번 작동하게 하고 싶어어
//기본적으로는 같은 이벤트를 여러 번 못함함

// let btn = document.querySelector('button');

// btn.onclick = () => {
//     alert('click1');
// }


// btn.onclick = () => {
//     alert('click2');
// }

//위에처럼 하면 click2만 적용됨

function click1() {
    alert('click1');
}

function click2() {
    alert('click2');
}

//btn.addEventListener('이벤트', 함수, 이벤트 전파)
//이벤트 전파 => true:capturing, false:bubbling
btn.addEventListener('click', click1, false);
btn.addEventListener('click', click2, false);


