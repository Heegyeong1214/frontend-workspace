//1. 6개의 난수를 구하고 중복 체크
let lotto = []; //배열 생성 
for (let i = 0; i <= 5; i++) {
    // Math.random(): 0.0이상 ~ 1.0미만의 난수
    let ran = Math.random() * 45; // 0.0이상 ~ 45.0미만의 난수 발생
    //console.log(ran);

    ran = Math.floor(ran) + 1; //1이상 45이하
    lotto.push(ran); // 배열에 난수값 추가; lotto = [...ran]???도 가능한가?
    console.log(lotto);// 확인했을 때 중복되었을 수 있음음

    //중복체크 : 기존의 값과 가장 최근에 추가된 값을 추가함
    for (let j = 0; j < i; j++) {
        if (lotto[j] == lotto[i]) {
            lotto.pop(); //중복된 값 중 마지막에 들어간 값을 제거함
            i--;
            break;
        }
    }
}



//2. 정렬
lotto.sort((a, b) => {
    return a - b;
});
console.log(lotto);

//3. 출력
//let divList = document.querySelectorAll('div.wrap').children;
let divList = document.querySelectorAll('div.wrap>div'); //>붙여써야 함함
console.log(divList);

divList.forEach((element, idx) => {
    element.innerText = lotto[idx]; //element의 text에 lotto[idx]의 값을 넣어줘라
});