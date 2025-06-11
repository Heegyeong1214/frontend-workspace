// // <input type="submit" value="login" />
//  <button button value = "login" > login</button>
// <input id="imgBtn" type="image" src="images/signin.gif" />

//위 3개는 form 요소 안에서 작성하면 form에서 자동적으로 submit 이벤트가 발생한다.

let idNode = document.querySelector('#my_id');
let passNode = document.querySelector('#my_pass');

//log_f.라는 form에서 submit 이벤트가 발생하면 이 함수를 수행함.
//함수를 미리 설정해도 되지만 아래와 같이 바로 함수 정의해도 괜찮음
document.log_f.onsubmit = function () {
    if (idNode.value == "") {
        alert('아이디를 입력하세요.'); //입력안했을 때 경고창 띄우기
        //그래서 홈에 액션이 실행(페이지 팝업)되지 않아야 함.
        return false;
    }
    if (passNode.value == "") {
        alert('비밀번호를 입력하세요.');
        return false;
    }
    return true;
}