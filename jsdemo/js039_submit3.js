/* <button value="login">login</button> 

form안에서 button 적용했을 때 자동으로 submit 적용 => submit.js와 동일 */

let idNode = document.querySelector('#my_id');
let passNode = document.querySelector('#my_pass');


// document.log_f.onsubmit = function () {
document.log_f.onsubmit = () => {
    if (idNode.value == "") {
        alert('아이디를 입력하세요.');
        return false;
    }
    if (passNode.value == "") {
        alert('비밀번호를 입력하세요.');
        return false;
    }
    return true;
}
