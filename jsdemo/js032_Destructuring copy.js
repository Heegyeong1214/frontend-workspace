//Destructuring (구조 분해 할당)
// : Destructuring(디스트럭쳐링)은 structuring(구조화)된 배열 또는 객체를 Destructuring(비구조화)
//   하여 개별적으로 변수에 할당하는 개념이다.

//1. 배열의 Destructuring


//일반적으로 a,b에 값 할당하는 방법
let a, b;
[a, b] = [5, 10];
console.log(`a=${a}, b=${b}`);


let c, d, e;
[c, d, e] = [1, 2, 6, 4, 5];
console.log(c, d, e);

[c, d, ...e] = [1, 2, 6, 4, 5];
console.log(c, d, e);
console.log(e);

[c, d, e = 5] = [1, 2, 6];
console.log(c, d, e);



