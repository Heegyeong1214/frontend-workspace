//spread operator (스프레드 연산자, 전개연산자, 펼침연산자)
//형태 : (...변수)

//////////////////////////////////////////////////////////
//[1] 배열에서의 Spread Operator

//1. 배열 복사 (Array Copy) : 배열에 있는 값을 복사할 때 사용
let arr1 = [1, 2, 3];
let arr2 = arr1; //[1, 2, 3, 5]

arr2.push(5);
console.log(arr2);

let arr3 = [1, 2, 3];
let arr4 = [...arr3];

arr4.push(5);
console.log(arr3); //[1, 2, 3]
console.log(arr4); //[1, 2, 3, 5]

let arr5 = [5, 6, [7, 8]];
let arr6 = [1, ...arr5];
console.log(arr5); // [5,6,Array(2)]
console.log(arr6); //1, 5,6,Array(2

arr6[0] = 20;
console.log(arr6); //[20,5,6,Array(2)]

arr6.push(30);
console.log(arr6); //[20,5,6, Array(20), 30]

arr6[2][0] = 10;
console.log(arr6);//[20,5,6,[10,8],30]

console.log(arr6.length); //5

let arr10 = [...arr1, ...arr5, ...arr6];
console.log(arr10); //[12356[7,8],20 56 [78]30]
console.log(arr10.length); //12



let arr13 = [1, 2, 3, 4, 5];
console.log(Math.max(...arr13)); //5
console.log(Math.min(...arr13)); //1
console.log(Math.round(...arr13)); //1

let arg = { name: "희경", age: 20 };
let arg1 = { ...arg };
console.log(arg1);

let arg2 = { ...arg, loc: "청주" };
console.log(arg2);

arg2.name = "유희경";
arg2.loc = "서울";
console.log(arg2); //유희경 20 서울
