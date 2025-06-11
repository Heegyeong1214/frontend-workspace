//약관 동의

document.frm.onsubmit = () => {

    let admin = document.frm.admin; //<p><input type="checkbox" name="admin" />약관에 동의합니다.</p>
    if (!admin.checked) { //admin.check의 창에서 체크가 안되어있으면 false
        alert('약관에 동의해야 합니다.');
        return false;
    }
}


//전체 선택
//
// document.frm.allCheck.onclick = () => {
//     console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// }


document.frm.allCheck.onclick = function () {
    // console.log(this); //<input type="checkbox" name="allCheck" id="allCheck"></input>
    // document.frm.subject1.checked = this.checked; //이름으로 접근
    // document.frm.subject2.checked = this.checked;
    // document.frm.subject3.checked = this.checked;

    ////////For Each(): 위에 하나씩 하는 걸 한번에 하기
    // let checkgroup = document.querySelectorAll(".checkgroup");
    // //console.log(checkgroup);

    // let myThis = this; //this는 전체선택
    // checkgroup.forEach(function (element) {
    //     //this는 window
    //     element.checked = myThis.checked;

    // });

    ////////////map() 사용하기
    let myThis = this; //this는 전체선택
    let checkgroup = document.querySelectorAll(".checkgroup");
    //checkgroup은 NodeList이므로 map을 사용할 수 없다.
    //Array.from()을 이용해서 NodeList을 Array로 생성한다.
    // let myArray = Array.from(checkgroup);
    // myArray.map((element) => {
    //    return element.checked = myThis.checked;
    // });

    /////////////////////////////////////////////////
    let iArray = [...checkgroup];
    iArray.map((element) => {
        return element.checked = myThis.checked;
    });
}