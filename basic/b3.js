//ESNext에서 추가 되거나, 변경된 문법2
// 자바타입 : 원시타입(8개)+참조타입(1:무한대)
// 문자열 : 기존방식 '.....',"...." 둘다 문자열
// 신규추가 ; template Literals => 새로운 기호를 도입'(백틱)
//          여러줄표횬, 구조를 유지, 포멧팅가능

//포멧팅
/*
이태원 참사에 대한 경찰 수사가 경찰과 소방 등 실무진들의 현장 대응에만 집중하고 있다는 비판이 제기되는 가운데, 소방공무원 노조가 이상민 행안부 장관을 고발했습니다.30
7번
*/
const name = '이태원';
const age = 30;
const nunber = '7번';
//기존방식
var t = '경찰 과 "소방"'+ name + "(이태원 참사에 대한 경찰 수사가 경찰과 소방)이\n";
//신규방식
t= `
${name}참사에 대한 경찰 수사가 경찰과 소방 등 실무진들의 ${name}현장 대응에만 집중하고 있다는 비판이 ${name}제기되는 가운데, 
소방공무원 노조${age} 가 이상민 행안부${nunber} 장관을 고발했습니다 `

console.log(t)

//구조유지
/*
로그인 sq1 쿼리문

select
*
from
userTb1
where
uid='quest';
*/
let uid = 'quest'
let sq1 =  `
select
*
from
userTb1
where
uid='${uid}';
`
console.log(uid)