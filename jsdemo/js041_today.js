//날짜 처리할 때는 반드시 new를 처리해야 함

let dateBtnNode = document.querySelector('button');
let pNode = document.querySelector('p');

dateBtnNode.onclick = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    pNode.innerText = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
}