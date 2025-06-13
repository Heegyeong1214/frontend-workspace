document.addEventListener("DOMContentLoaded", function () {
    // document.querySelector(".rating")); // <div class="rating">
    document.querySelector(".rating").addEventListener('click', function (e) {
        let elem = e.target;
        console.log(elem);
        //<label for="rating1"></label>
        //<input type="checkbox" name="rating" id="rating1" value="1" class="rate_radio" title="1점"></input>

        if (elem.classList.contains("rate_radio")) {
            rating.setRate(parseInt(elem.value));
        }
    });
});

//상품평 작성했을 때 글자수 초과하면 발생하는 이벤트 리스너
//"keydown": 키보드 누르기
document.querySelector(".review_textarea").addEventListener("keydown", function () {
    let review = document.querySelector(".review_textarea");
    let lengthCheckEx = /^.{400,}$/; //^~&: 시작~ 끝, .{400,}: 400개 이상
    if (lengthCheckEx.test(review.value)) {
        //400자 이상이면 잘라낼거야
        review.value = review.value.substring(0, 400);

    }
    // console.log(review.value);
});

//저장 전송 전 필드 체크를 위한 리스너
//document.querySelector("#save"):<input type="button" name="save" id="save" value="등록" />
document.querySelector("#save").addEventListener('click', function () {
    //별점 선택 안했으면 메시지 표시
    if (rating.rate == 0) {
        rating.showMessage("rate");
        return false; //아래 if 문을 더이상 진행하지 않기 위해서 이 문장 추가한 것것
    }
    //리뷰 메세지
    if (document.querySelector(".review_textarea").value.length < 5) {
        rating.showMessage("review");
        return false;
    }
    //폼 제출
    alert("저장완료!!!");

    //전송되고 난 다음 초기화
    rating.setRate(0);
    document.querySelector(".review_textarea").value = "";
});


//별점 마킹 모듈을 프로토타입을 이용해서 객체 생성
function Rating() { } //함수 정의, 객체로 쓸거면 대문자로 써야함
Rating.prototype.rate = 0;
Rating.prototype.setRate = function (newrate) {
    //별점 마킹 - 클릭한 별 이하 모든 별 체크 처리
    this.rate = newrate;
    let items = document.querySelectorAll(".rate_radio");
    items.forEach((item, idx) => {
        if (idx < newrate) {
            item.checked = true;
        } else {
            item.checked = false;
        }
    });

};


Rating.prototype.showMessage = function (type) {
    //경고 메세지
    switch (type) {
        //"rate"는 구분하기 위한 임의의 문자열
        case "rate":
            //안내메세지 표시
            document.querySelector(".review_rating .warning_msg").style.display = "block";
            //1초 지나면 안내메세지 사라지게 
            setTimeout(function () {
                document.querySelector(".review_rating .warning_msg").style.display = "none";
            }, 1000);
            break;
        case "review":
            //안내 메세지 표시 : css에 이거 감춰져 있어서 보여지게 해야함
            document.querySelector(".review_contents .warning_msg").style.display = "block";
            setTimeout(function () {
                document.querySelector(".review_contents .warning_msg").style.display = "none";
            }, 1000);
            break; //끝이라서 break 생략해도 무관
    }

};

let rating = new Rating(); //별점 인스턴스 생성
