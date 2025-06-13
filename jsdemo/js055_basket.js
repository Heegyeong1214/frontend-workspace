//basket이라는 객체 생성
let basket = {
    totalCount: 0, //데이터값이 있을 때에는 : 이용
    totalPrice: 0,

    //체크한 장바구니 상품 비우기(HTML에 해당 함수 사용하기 때문에 만들어야지): 객체 안에 함수 만들어도 괜찮다
    delCheckedItem: function () {
        document.querySelectorAll("input[name = buy]:checked").forEach(function (item) {
            item.parentElement.parentElement.parentElement.remove();


        });

        //전송 처리 결과가 성공이면
        this.reCalc(); //삭제된 수량만큼 재계산
        this.updateUI();
    },

    //장바구니 전체 비우기
    delAllItem: function () {
        document.querySelectorAll('.row.data').forEach(function (item) {
            item.remove();
        });

        //전송 처리 결과가 성공이면
        this.totalCount = 0;
        this.totalPrice = 0;
        this.reCalc();
        this.updateUI();
    },

    //객체 내에 재계산해주는 함수 작성
    reCalc: function () {
        this.totalCount = 0;
        this.totalPrice = 0;
        document.querySelectorAll(".p_num").forEach(function (item) {
            let count = parseInt(item.getAttribute("value"));
            this.totalCount += count;
            let price = item.parentElement.parentElement.previousElementSibling.firstElementChild.getAttribute("value");
            price = parseInt(price);
            this.totalPrice += count * price;
        }, this); //forEach 2번째 파라미터로 객체를 넘겨서 this가 객체리터널을 가리키도록 함함
    },

    //화면 업데이트
    updateUI: function () {
        document.querySelector('#sum_p_num').textContent = '상품갯수:' + this.totalCount.formatNumber() + '개';
        document.querySelector('#sum_p_price').textContent = '합계금액: ' + this.totalPrice.formatNumber() + '원';
    },

    //개별 수량 변경
    //pos: 숫자
    changePNum: function (pos) {
        let item = document.querySelector('input[name=p_num' + pos + ']');
        let p_num = parseInt(item.getAttribute('value'));


        ////event 대신 this로 하면 오류 뜸
        let newval = event.target.classList.contains('up') ? p_num + 1 : event.target.classList.contains('down') ? p_num - 1 : event.target.value;
        // console.log(newval); //숫자 찍히는 것 확인

        //상품갯수가 1보다 작거나 99보다 크면 안됨: 재고량
        if (parseInt(newval) < 1 || parseInt(newval) > 99) { return false; }

        //  
        item.setAttribute("value", newval);


        let price = item.parentElement.parentElement.previousElementSibling.firstElementChild.getAttribute("value");
        item.parentElement.parentElement.nextElementSibling.textContent = (newval * price).formatNumber() + '원';
        //Ajax 업데이터 전송

        //전송 처리 결과가 성공이면면
        this.reCalc();
        this.updateUI();
    },

    //삭제버튼이 있는 행 상품삭제
    delItem: function () {
        event.target.parentElement.parentElement.parentElement.remove();
        //Ajax 업데이터 전송
        //전송 처리 결과가 성공이면
        this.reCalc();
        this.updateUI();
    }
}

//숫자 3자리 콤마찍기
//기본적으로 제공되는 Number라는 객체에 추가됨
Number.prototype.formatNumber = function () {
    //여기에서 this는 formatNumber() 메소드를 호출하는 Number 객체 자체를 의미한다. (즉, 숫자이다.)
    // this: totalCount ; 삭제하고 남아있는 숫자(Number에 해당하니까)
    if (this == 0) return 0;
    // 3자리마다 콤마를 찍기 위한 정규식
    // (^[+-]?\d+): 문자열 시작부터 + 또는 -가 없거나 1개 있을 수 있고(?), 숫자가 1개 이상 (\d+) 나오는 그룹
    // (\d{3}) : 숫자 3자리 그룹 -> {n}: 정확히 n개
    let regex = /(^[+-]?\d+)(\d{3})/;

    //숫자를 문자열로 변경(문자열로 되어야 정규식을 적용할 수 있기 때문이다다) -> toString 써도 됨
    let nstr = (this + '');

    //정규식에 매칭될 때마다 (즉, 3자리마다 콤마를 찍어야 할 때마다)
    while (regex.test(nstr)) {
        //첫 번째 그룹 + ',' + 두번째 그룹으로 문자열을 바꿔서 3자리마다 콤마를 추가한다.
        nstr = nstr.replace(regex, '$1' + ',' + '$2');
    }

    //최종 콤마가 찍힌 문자열을 반환한다.
    return nstr;
}