let data = "It`s alright";
console.log(data, typeof data);


//length : 문자열의 길이
console.log(data.length); //12

/*
 특정 범위 데이터를 리턴해주는 3가지 메소드
 1. substring(start, end);
 2. substr(start, length); => Deprecated  Use substring() or slice() instead.
 3. slice(start, end);
*/

data = "Apple, Banana, Kiwi";
//Banana
console.log(`substring: ${data.substring(7, 13)}`); //7인덱스 부터 13 인덱스 미만
//substring()은 음수값을 지원하지 않는다.
console.log(`substring: ${data.substring(-12, -6)}`);


//Banana
console.log(`substr: ${data.substr(7, 6)}`);
//Banana
console.log(`substr: ${data.substr(-12, 6)}`);


//Banana
console.log(`slice: ${data.slice(7, 13)}`);
//Banana
console.log(`slice: ${data.slice(-12, -6)}`);

/////////////////////////////////////////////////////////////////////////////////////
// replace('/찾을 문자열/RegExp', '바꿀 문자열');
// i: 대소문자 구분없음,  g: 모든 문자열

console.log(`replace: ${data.replace("Banana", "Grape")}`);
//Apple, Banana, Kiwi
console.log(data);
//replace: Apple, Grape, Kiwi

data = "Mr Blue has a blue house and a blue car";
//Mr Blue has a red house and a blue car
console.log(data.replace(/blue/, "red")); //대소문자 구분하고 모든 blue 중에서 처음 blue만 red로 변경


data = "Mr Blue has a blue house and a blue car";
//Mr Blue has a red house and a red car
console.log(data.replace(/blue/g, "red")); //모든 blue를 red로 변경


data = "Mr Blue has a blue house and a blue car";
//Mr red has a blue house and a blue car
console.log(data.replace(/blue/i, "red")); //대소문자 구분 없이 모든 blue 중 맨 처음 blue만 변경


data = "Mr Blue has a blue house and a blue car";
//Mr red has a red house and a red car
console.log(data.replace(/blue/gi, "red")); //대소문자 구분 없이 모든 blue를 red로 변경

/////////////////////////////////////////////////////////////////////////
data = "Hello World";
//HELLO WORLD
console.log(`toUpperCase() : ${data.toUpperCase()}`); //모든 문자를 대문자로 변경
//hello world
console.log(`toLowerCase() : ${data.toLowerCase()} `); //모든 문자를 소문자로 변경


let data2 = "javascript";
//Hello Worldjavascript
console.log(`concat() : ${data.concat("", data2)}`); //변수.concat(변수)): 데이터끼리 연결
//Hello World javascript
console.log(`concat() : ${data.concat(" ", data2)}`);
//Hello World_javascript
console.log(`concat() : ${data.concat("_", data2)}`);



//H
console.log(`charAt(): ${data.charAt(0)}`); //인덱스에 해당되는 값 호출
//72 (unicode value)
console.log(`charAt(): ${data.charCodeAt(0)}`);

//////////////////////////////////////////////////////////////////////////////


data = "a,b,c,d,e";
//split() : 문자열을 나누워 준다.
let arr = data.split(",");
for (let i of arr) console.log(i); // a, b, c, d, e


//match() : 검색데이터와 일치하는 문자열 있으면 문자열 모두를 찾아서 배열로 리턴하고
//          일치하는 문자열이 없으면  null로 리턴한다.
data = "Mr Blue has a blue house and a blue car";
let res = data.match(/blue/g); //배열로 리턴
//blue,blue object true
console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);


res = data.match(/red/g); //리턴되는 게 없어서 배열 형태로 리턴 못함
//match(): null object false
console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);


//search( ) : 검색데이터와 일치하는 문자열이 있으면 검색데이터가 처음으로 확인되는 index를 리턴하고
//            일치하는 문자열이 없으면 -1을 리턴한다.
res = data.search(/blue/);
//14
console.log(`search(): ${res}`);


res = data.search(/red/);
// -1
console.log(`search(): ${res}`);


data = "Mr Blue has a blue house and a blue car";
//indexOf( ) : 문자열의 인덱스를 리턴
//0
console.log(data.indexOf("M"));
//3
console.log(data.indexOf("B"));


let position = data.indexOf("blue");
//31
console.log(data.indexOf("blue", position + 1)); //인덱스 15(position + 1)부터 blue를 찾으세요


data = "Mr Blue has a blue house and a blue car";
let pos = -1;
do {
    pos = pos + 1;
    pos = data.indexOf("blue", pos);
    if (pos != -1) console.log(pos); //14 31
    else break;
} while (true);


data = "Mr Blue has a blue house and a blue car";
for (let i = 0; i < data.length; i += 1) {
    i = data.indexOf("blue", i);
    if (i == -1) break;
    console.log(i); //14 31
}


//repeat()
let text = "korea";
console.log(text.repeat(10)); //koreakoreakoreakoreakoreakoreakoreakoreakoreakorea


text = "*";
console.log(text.repeat(10)); //**********


let text2 = "  korea   data ";
//15
console.log(text2.length); //공백 포함
//12
console.log(text2.trim().length);




