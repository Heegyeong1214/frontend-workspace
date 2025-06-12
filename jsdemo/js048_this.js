//호출한 객체가 없을 경우에는 this는 기본적으로 window 객체이다.
//this는 현재 사용하고 있는 객체의 정보

console.log(this);


//this 확인하는 방법

//1. 객체 내 function 구현법 1///////////////////////////////////////////
//member라는 객체 생성
let member = {
    name: '홍길동',
    // 객체에서 함수를 정의할 때는 함수이름 : function(){}으로 작성
    show: function () { //show = function(){}과 동일일
        console.log(this);
    }
};

//{name: '홍길동', show: ƒ}
//객체에서 funtion으로 표현한 this는 현재 객체에 저장되어 있는 값을 의미한다.
member.show();


//2. 객체 내 function 구현법 2//////////////////////////////////////////////////////////////////////
//member2라는 객체
let member2 = {
    name: '홍길동',
    show: () => {
        console.log(this);
    }
}
//arrow 함수에서의 this는 window => 함수를 어떻게 구현하느냐에 따라 this 값이 달라짐
member2.show();//Window : 현재 구현하고 있는 실행 창

//3. 객체 내 function 구현법 3///////////////////////////////////////////////////////////////////////
let member3 = {
    name: '홍길동',
    show() {
        console.log(this);
    }
};

//{name: '홍길동', show: ƒ}
member3.show();


/////////////////////////////////////
//4. 객체 통해서 this를 호출하는 것이 아님
// 
function showThisName() {
    console.log(this);
}

showThisName(); //Window

//5. arrow 함수로 4번 다시 표현
let showThisName2 = () => {
    console.log(this);
}

showThisName2(); //widow

//이벤트(button)에서 this

//일반 함수로 정의
//이벤트가 발생했을 때의 this는 <button id="btn">commit</button>
let btn = document.querySelector('#btn'); //HTML에서 ID
btn.addEventListener('click', function () {
    console.log(this);
}, false);

//arrow 함수
//window
btn.addEventListener('click', () => {
    console.log(this);
}, false);

//arrow 함수를 적용하면 모든 this의 값이 window

///////////////////////////////////////////////////////////////
const hong = { name: '홍길동' }; //객체
const jung = { name: '정해인' }; //객체


//call() : 모든 함수에서 사용할 수 있는 this값을 특정값으로 지정할 수 있다.
console.log('call()=====================');

/* 
 function showThisName() {
 console.log(this);
 }
*/

//showThisName(): 파라미터가 없는 함수
//this에 값을 저장하면서 호출
showThisName.call(hong);  //{name: '홍길동'}
showThisName.call(jung); //{name: '정해인'}


/*
let showThisName2 = () => {
console.log(this);
}
*/

////일반 함수 썼을 때에도 this => window
showThisName2.call(hong); //Window 
showThisName2.call(jung); //Window


function update(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
    console.log(this);
}

update(2019, 'IT'); //window

//update(): 파라미터가 있는 함수 -> 객체를 먼저 넘겨줘야 한다?

//update.call(this의 대상 객체, argument, argument);
update.call(hong, 2000, '프로그래머'); //{name: '홍길동', birthYear: 2000, job: '프로그래머'}
update.call(jung, 2016, '디자이너'); //{name: '정해인', birthYear: 2016, job: '디자이너'}

//////////////////////////////////////////////////////////////
//apply()
//1. apply()는 함수 매개변수를 처리하는 방법을 제외하면 call()과 같다.
//2. call()은 일반적인 함수와 마찬가지로 지정한 값을 매개변수로 직접 받지만 apply()를 배열로 받는다.

update.apply(hong, [2000, '프로그래머']); //{name: '홍길동', birthYear: 2000, job: '프로그래머'}
update.apply(jung, [2016, '디자이너']); //{name: '정해인', birthYear: 2016, job: '디자이너'}

/////////////////////////////////////////////////////
//bind()
//1. call()과 사용방법은 같지만 별도로 실행을 해야 한다,
let hongUPdate = update.bind(hong, 2000, '프로그래머');
hongUPdate(); //{name: '홍길동', birthYear: 2000, job: '프로그래머'}

update.bind(hong, 2000, '프로그래머')(); //{name: '홍길동', birthYear: 2000, job: '프로그래머'}

let jungUPdate = update.bind(jung, 2016, '디자이너'); //등록
jungUPdate(); //실행: {name: '정해인', birthYear: 2016, job: '디자이너'}

update.bind(jung, 2016, '디자이너')(); //{name: '정해인', birthYear: 2016, job: '디자이너'}