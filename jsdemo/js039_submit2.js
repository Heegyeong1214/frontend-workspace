//<input type="button" value="login" id="btn" />

let btn = document.querySelector('#btn');
let idNode = document.querySelector('#my_id');
let passNode = document.querySelector('#my_pass');




//이벤트를 써줄 때는 반드시 앞에 on을 적어야함
// btn.onclick = function () {
btn.onclick = () => {
    if (idNode.value == "") {
        alert('아이디를 입력하세요.'); //입력안했을 때 경고창 띄우기
        //그래서 홈에 액션이 실행(페이지 팝업)되지 않아야 함.
        return false;
    }
    if (passNode.value == "") {
        alert('비밀번호를 입력하세요.');
        return false;
    }

    //button에는 submit까지 안해줘서 강제로 submit() 이벤트를 발생시킨다
    document.log_f.submit();
}
