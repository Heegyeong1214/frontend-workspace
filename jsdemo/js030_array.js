const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]


let data = fruits.toString(); //문자열로 만들어 줌줌
console.log(`${data}`); //Banana,Orange,Apple,Mango
console.log(`${typeof data}`); //string

//fruits.join()은 fruit에 있는 것을 문자열로 연결해주는 것
console.log(typeof fruits.join()); //string
console.log(fruits.join()); //Banana,Orange,Apple,Mango : 기본이 ,로 연결해줌 ; concat()은 ,없이 그냥 바로 연결함
console.log(fruits.join("*")); //Banana*Orange*Apple*Mango
console.log(fruits.join("_")); //Banana_Orange_Apple_Mango

///////////////////////////////////////////////////////////////////////////////////
//배열의 요소 추가 및 제거


//배열의 끝에 요소 추가
fruits[4] = "Kiwi";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
// push(): 새로운 요소를 넣고 배열의 갯수를 리턴해주니까 숫자가 결과
console.log(fruits.push("Melon")); //6 : 
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Melon' ]


//배열의  끝에 요소를 완전히 제거 (자리도 없음)
//pop(): 배열의 맨 마지막에 있는 요소 제거 -> Java에서 스택??과 유사
console.log(fruits.pop()); //Melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//배열의 앞에 요소를 추가
//unshift(); 배열의 앞에 요소를 추가하고 배열의 갯수 리턴턴
console.log(fruits.unshift("Melon")); //6
console.log(fruits); //[ 'Melon', 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//shift();배열의 앞에 요소를 제거
console.log(fruits.shift()); //Melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//특정 위치의 요소 제거(자리는 확보하고 있음)
delete fruits[3];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', <1 empty item>, 'Kiwi' ]


fruits[3] = "Mango";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//slice(a,b): a이상 b미만 범위의 요소를 가져옴
//slice(a) : a인덱스 이상의 값부터 끝까지 다 가지고 옴
//substring()은 음수 지정 안됨
console.log(fruits.slice(1, 3)); //[ 'Orange', 'Apple' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


console.log(fruits.slice(-4, -2)); //[ 'Orange', 'Apple' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


console.log(fruits.slice(1)); //[ 'Orange', 'Apple', 'Mango', 'Kiwi' ]


/////////////////////////////////////////////////////////////////////////////
//https://woong-jae.com/javascript/220412-sort-implementation
//javascript에서 sort()는 Tim Sort 알고리즘을 사용한다.
//Tim Sort는 Insertion sort와 Merge Sort을 결합하여 만든 정렬이다.
//Tim Sort 알고리즘 : https://d2.naver.com/helloworld/0315536

//sort(): 알파벳 오름차순 정렬

console.log(fruits.sort()); //['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']
console.log(fruits); //['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']

//알파벳 내림차순 정렬
console.log(fruits.sort().reverse()); //['Orange', 'Mango', 'Kiwi', 'Banana', 'Apple']


//숫자를 같은 방식으로 하면 오름차순 정렬 안됨ㅠㅠ
let point = [40, 100, 1, 5, 10];
console.log(point.sort()); // [1, 10, 100, 40, 5] :문자열로 처리됨


//숫자 오름차순 정렬
const asc = point.sort(function (a, b) {
    console.log(`a:${a}, b:${b}, a-b:${a - b}`);
    return a - b;
});

console.log(asc); //[1, 5, 10, 40, 100]

//숫자 내림자순 정렬
const desc = point.sort(function (a, b) {
    console.log(`a:${a}, b:${b}, b-a:${b - a}`);
    return b - a;
});

console.log(desc); //[100, 40, 10, 5, 1]

////////////////////////////////////////////////////////////
//concat(): 배열 합치기
let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]);
console.log(zData.length);  //9
console.log(zData); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

///////////////////////////////////////////////////////////////////////
//flat(): 배열 안에 있는 배열의 가장 겉에 있는 대괄호를 삭제
let arr2 = [1, 3, [[[4, 5]]], [7, 8], [[9, 10], 12]];
console.log(arr2.length); //5
console.log(arr2); //[1, 3, Array(1), Array(2), Array(2)]
console.log(arr2.flat(1)); //[1, 3, Array(1), 7, 8, Array(2), 12]
console.log(arr2.flat(2)); //[1, 3, Array(2), 7, 8, 9, 10, 12]
console.log(arr2.flat(3)); //[1, 3, 4, 5, 7, 8, 9, 10, 12]

