let btn = document.querySelector("button");


console.log("start");
// 실행 순서상으로는 start - "addEventLister" -"end" 이어야 하는데
//실제로는 start -"end" -  "addEventLister"로 호출된다. 
// addEvetnListener: 
btn.addEventListener(
    "click",
    function () {
        console.log("addEventLister");
    },
    false
);


console.log("end");
