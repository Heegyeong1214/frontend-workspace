//배열 생성
let scores = [100, 90, 100];
console.log(scores); //[ 100, 90, 100 ]  Array(3)


console.log(scores[0]); //100
console.log(scores[1]); //90
console.log(scores[2]); //100
console.log(scores[3]); //undefined : 배열의 인덱스에 요소가 저장되어 있지 않아도 ubdefined로 리턴턴
console.log(scores.length); //3

//자바 스크립트에서는 다른 타입의 데이터도 배열의 요소로 적용할 수 있다.
let person = ["John", "Doe", 26, true];
/*
John string
Doe string
26 number
true boolean
*/
for (let idx in person) {
    console.log(person[idx], typeof person[idx]);
}

//배열 안에 배열열
let student = ["홍길동", [100, 90, 20]];
/*
홍길동 string
[ 100, 90, 20 ] object
*/
for (let idx in student) {
    console.log(student[idx], typeof student[idx]);
}

//배열 생성
let cars = new Array("Sasb", "Volvo", "BMW"); //cars=[]
for (let idx in cars) {
    console.log(cars[idx], typeof cars[idx]);
}

////////////////////////////////////////////////
//요소가 하나도 없는 배열 생성
let color = [];

// 요소 추가하는 방법 2가지지: [], push()
console.log(color.length); //0
color[0] = "red";
console.log(color.length); //1
color.push("green");
console.log(color.length); //2
color.push(759);
console.log(color.length); //3
color[8] = "blue";
console.log(color.length); //9
console.log(color); //[ 'red', 'green', 759, <5 empty items>, 'blue' ]

//for~ in이라서 인덱스 도출

/*
0: red
1:green
2: 759
8: blue
*/
for (let idx in color) {    //비어있는 인덱스의 위치 값은 출력이 안됨됨
    console.log(`${idx} : ${color[idx]}`);
}

//////////////////////////////////////////////////////////////////////
//3개의 크기를 가진 배열을 생성
let point = new Array(3);
console.log(`point length : ${point.length}`); //3


//10, 20 즉 2개의 요소를 가진 배열을 생성
let shape = new Array(10, 20);
console.log(shape.length); //2
for (let idx in shape) {
    console.log(`${idx} : ${shape[idx]}`);
}


shape[2] = 50; //추가
console.log(shape[1]); //요소 가져오기: 20
console.log(shape.length); // 갯수 조회 : 3


////////////////////////////////////////////////////////////

/*
for (; ;)
for~in: index
for~ of :element
*/

//forEach() : 배열에서만 사용되는 Method
//배열.forEach(function(element[, index]){수행할 문장});
shape.forEach(function (element, index) {
    console.log(`${index} : ${element}`);
});

shape.forEach((element, index) => {
    console.log(`${index} : ${element}`);
});

let choice = "javascript";
//문자열은 forEach()를 제공하지 않으므로 사용할 수 없다.
//TypeError: choice.forEach is not a function
// choice.forEach(function (element, index) {
//   console.log(`${index} : ${element}`);
// });


////////////////////////////////////////////////////////////////
// 배열명.map(callback함수수);
//배열에서만 사용할 수 있음

//함수를 직접 구현해서 값을 넣은 것과 다름 없다.
const numbers = [4, 9, 16, 25];
const res = numbers.map(function (element, index) {//index는 생략 가능: 4라는 element를 index 0에 받는다는 뜻
    return element * 2;
});

console.log(typeof res, res instanceof Array); // object true
console.log(res); // [8,18,32,50]

//Math에 있는 메소드는 모두 static이라고 되어 있어서 객체 생성 안하고 Math.로 사용해도 돼
const sqt = numbers.map(Math.sqrt);
console.log(sqt); //[2,3,4,5]

//////////////////////////////////////////////////////////////////
//배열명.reduce(callback);

//함수 별도로 지정함함
function getSum(total, element) {
    //total: 누적, element: 요소 -> element를 누적한다
    return total + element; //누적할 때 자바에서는 total += element인데 자바 스크립트는 그냥 =빼고 표현함
}

const sum = numbers.reduce(getSum);
console.log(sum); //54

/////////////////////////////////////////////////////////////////////
//배열.filter(callback);

const ages = [32, 33, 16, 40];
//function() 따로 함수 지정하지 않고 바로 넣은 것 ; ()안에 아무것도 없으면 무조건 element를 받는 것
const per = ages.filter(function (element, index) {
    return element >= 18;
});

console.log(per); //(3) [32, 33, 40]