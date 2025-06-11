/*
[1] Event Propagation(이벤트 전파)
//기본적으로 버블링이 적용됨
① 캡처링(capturing phase) : 부모요소에서 Target요소로 이벤트 전파
② 버블링(bubbling phase) : Target요소에서 부모요소로 이벤트 전파


[2] 이벤트 차단
 stopPropagation()


 [3] stopPropagation()와 preventDefault()비교
   stopPropagation() : 이벤트 전파 차단  return false(jQuery)
   preventDefault() : 디폴트 이벤트 차단  return false (javascript, jQuery)


   https://www.w3.org/TR/DOM-Level-3-Events/


*/
//red 할아버지 green 아버지 blue 나

//stopPropagation();
//red라는 요소에 click이벤트 적용되면
document.querySelector('.red').onclick = (e) => {
    alert('red');
    e.stopPropagation();
}

document.querySelector('.green').onclick = (e) => {
    alert('green');
    e.stopPropagation();

}

document.querySelector('.blue').onclick = (e) => {
    alert('blue');
    // console.log(e);
    e.stopPropagation();

}

//페이지 이동되는 거 차단할 거이유유
// preventDefault()
document.querySelector('a').onclick = (e) => {
    alert('안녕하세요');
    e.preventDefault();
}

document.querySelector('a').onclick = (e) => {
    alert('안녕하세요');
    return false;
}