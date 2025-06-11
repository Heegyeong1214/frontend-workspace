//작은 이미지를 큰 이미지로 확대해서 보게 할 거야!!!!!

//img가 여러가지라서 #photo 통해서 img 경로 구해야함
// <img src="./images/pic_1.jpg" width="320" alt="" />
let bigPhoto = document.querySelector('#photo>img');

let list_zone = document.querySelector('#inner_list');
let ul_li = list_zone.children;
console.log(ul_li); //HTMLCollection(8) [li li li li li li li li ]

//HTMLCollection을 Array로 변경하기 위한 방법
ul_li = Array.from(ul_li); //ul_li = [...ul_li];
ul_li.map((liTag, idx) => {
    let aTag = liTag.querySelector('a');

    //aTag를 클릭했을 때 href를 bigPhoto로 들어가게 함
    aTag.onclick = (e) => {
        bigPhoto.src = aTag.href;
        e.preventDefault(); // href에 있는 링크로 들어가는 것을 방지
    }
});

//다음( >) 버튼을 클릭할 때마다 <li> 100만큼 왼쪽으로 이동하게 한다.,
let m_num = 0; //클릭한 횟수
let b_btn = document.querySelector('#next_btn');
b_btn.onclick = (e) => {
    //3이 동해안 갤러리에 담겨지는 사진의 갯수. 
    if (m_num >= ul_li.length - 3) return false;
    m_num++; //클릭 계속하는
    //list_inner안에 li 8개가 있는데 이걸 움직이는 것
    list_zone.style.marginLeft = -100 * m_num + 'px';
    //#이라는 페이지로 넘어가지 않기 위함
    e.preventDefault(); //return false도 가능

}

//다음( <) 버튼을 클릭할 때마다 <li> 100만큼 오른쪽으로 이동하게 한다.,
let before_btn = document.querySelector('#before_btn');
before_btn.onclick = (e) => {
    if (m_num <= 0) return false;
    m_num--;
    list_zone.style.marginLeft = -100 * m_num + 'px';
    e.preventDefault();
}