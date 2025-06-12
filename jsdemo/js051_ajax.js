//AjAX: Asynchronous Javascript And XML (javascript랑 XML을 비동기화한다는 의미)

/*
1. XMLHttpRequest 객체 생성한다.
2. 서버와 통신할 때 사용할 처리 방법을 등록한다.
3. 요청을 전송하고 통신을 실행한다.
*/

function process() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true); //등록
    xhttp.send(); //요청


    //onload메서드는 요청이 성공한다는 전제하에 실행되는이벤트 핸들러
    //readystatechange이벤트 대신 -> onload 이벤트를 사용해도 됨

    //현재 페이지가 로딩이 되면
    xhttp.onload = () => {
        if (xhttp.status == 200) {
            //{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
            let data = JSON.parse(xhttp.response); //xhttp.response:서버로부터 응답받은거
            console.log(data);
        }
    };
}


console.log("start");
process();
console.log("end");


