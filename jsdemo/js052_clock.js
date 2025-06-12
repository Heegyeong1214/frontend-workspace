//getMonth, getDay 이렇게 하면 한자리 수로만 표현이 된다.

function leftpad(num) {
    if (num < 10) return `0${num}`;
    else return `${num}`;
};

//시간, 분, 초 여러번 반복되니까 이 함수로 퉁치기기
function setText(selector, text) {
    let targetElement = document.querySelector(selector);
    targetElement.innerText = leftpad(text);
}

//처음에 봤을 때 시간이 바로 보여야 함
function wathchTime() {
    let present = new Date(); //날짜는 반드시 객체 생성해야 함
    const dayList = ["일", "월", "화", "수", "목", "금", "토"];

    setText('#hours', present.getHours());
    setText('#minute', present.getMinutes());
    setText('#seconds', present.getSeconds());
    setText('#year', present.getFullYear());
    setText('#month', present.getMonth() + 1);
    setText('#date', present.getDate());


    const day = present.getDay();
    setText('#day', dayList[day]);

}
wathchTime();

//1초가 지나면 watchTime을 실행해!라고 등록을 한 것
let clockInterval = setInterval(wathchTime, 1000);

//버튼을 눌러야 1초마다 초수가 변하는 것을 종료될 수 있음
let btn = document.querySelector('button'); //button이라는 요소 하나밖에 없으니까 그냥 이걸로 호출
btn.onclick = () => {
    if (btn.innerText == '시간종료') {
        clearInterval(clockInterval);
        btn.innerText = '시간시작';
    } else {
        let clockInterval = setInterval(wathchTime, 1000);
        btn.innerText = '시간종료';

    }
}



/*
 setTimeout(실행함수, 시간) :  일정한 시간이 지난후 한번만 실행함 - 한번수행
 setInterval(실행함수, 시간) : 일정 시간 간격을 두고 반복 실행함- 반복수행


 clearTimeout, clearInterval : 해제
*/
