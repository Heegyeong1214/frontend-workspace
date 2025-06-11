//spread operator (스프레드 연산자, 전개연산자, 펼침연산자)
//형태 : (...변수)

//////////////////////////////////////////////////////////
//[1] 배열에서의 Spread Operator

//1. 배열 복사 (Array Copy) : 배열에 있는 값을 복사할 때 사용
let arr1 = [1, 2, 3];
let arr2 = arr1;  //얇은 복사(shallow copy) :arr1, arr2 둘다 영향을 줌
console.log(`arr1 : ${arr1}`); //arr1 : 1,2,3 -> 요소값만 리턴
console.log(`arr2 : ${arr2}`);
console.log(arr1); //[1, 2, 3]

//arr2에만 4를 넣었는데도 arr1, arr2의 주소값이 같기 때문에 arr1의 값도 arr2와 함께 변한다
arr2.push(4);
console.log(`arr1 : ${arr1}`); //arr1 : 1,2,3,4 
console.log(`arr2 : ${arr2}`); //arr2 : 1,2,3,4

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; //깊은 복사(deep copy)
console.log(`arr3 : ${arr3}`); //arr3 : 1,2,3
console.log(`arr4 : ${arr4}`); //arr4 : 1,2,3

arr4.push(4);
console.log(`arr3 : ${arr3}`); //arr3 : 1,2,3
console.log(`arr4 : ${arr4}`); //arr4 : 1,2,3,4

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5); //[10, 20, 1, 2, 3, 40, 50]

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6]; // deep copy발생
console.log(arr6); //[5, 6, Array(2)]
console.log(arr7); //[1, 5, 6, Array(2)]

arr6[0] = 20;
arr6[2][0] = 10; // 1차원만 deep copy발생
console.log(arr6); //[20, 6, Array(2)] -> [20, 6, [10, 8]]
console.log(arr7); //[1, 5, 6, Array(2)] -> [1, 5, 6, [10, 8]]

// 2. 배열 병합(Array Concatenation)
let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
let arr10 = [7, 8, 9];
let arr11 = [...arr8, ...arr9, ...arr10];
console.log(arr11); //[  1, 2, 3, 4, 5,  6, 7, 8, 9]


/////////////////////////////////////////////////////
// [2] 함수의 Spread Operator : 파라미터로 사용할 때

//1. Rest Parameter(나머지 매개변수)
function display(...params) {
    return params.reduce((sum, a) => {
        return sum + a;
    });
}

console.log(display(1, 2)); //3
console.log(display(1, 2, 3, 4, 5)); //15

//2. 함수 호출 인수
console.log(Math.max(1, 2, 3, 4, 5)); //5
console.log(Math.min(1, 2, 3, 4, 5)); //1

let arr13 = [10, 20, 30, 40, 50];
console.log(Math.max(...arr13)); //50


//[3] 값만 가지고 있는 객체에서 Spread Operator

//1.객체 복사
let prevState = { name: "고수", age: 30 };
// let currentState = prevState; //shallow copy
let currentState = { ...prevState }; //deep copy
console.log(currentState); //{name: '고수', age: 30}

//새로운 값 추가하면서 deep copy 발생
currentState = { ...prevState, loc: "서울" };
console.log(currentState); //name: '고수', age: 30, loc: '서울'}

//2. 객체 업데이트
let prevState2 = { name: "고수", age: 30 };
console.log(prevState2); //{name: '고수', age: 30}

prevState2.name = "여진구";
console.log(prevState2); //{name: '여진구', age: 30}

prevState2 = { ...prevState2, age: 40 };
console.log(prevState2); //{name: '여진구', age: 40}


