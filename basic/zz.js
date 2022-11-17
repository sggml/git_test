function Calander(a,b) {
    if(a ! = undefined && b !=undefined){ //a와b가 참이여야 출력
    v_year = a;
    v_month = b;
} else {// 오늘로 이동 // else : 거짓이면 flase
 v_year = year;
 v_month = month;
}
    
}
//인수 받는 것을 처음에 둬야 이후 변수들에 대입되어 오류가 안난다.
var last_date = new Date(v_year, v_month + 1,0).getDate(); // 이번달 마지막 일
var first_day = new Date(v_year, v_month, 1).getDay();// 이번 달 시작 요일 (0=>일, 1=>월 ....)
select_ym.innerHTML = '<div>' + v_year + '년' + (v_month + 1)+ '월' +'</div>';

var row = calendar.insertRow();
for (var i = 0; i < first_day; i++) {//월의 시작일 전의 빈칸
var cell = row.insertCell();
}

for (var i = 1; i<= last_date; i++){//빈칸 이후의 달의 일수
if (first_day ! = 7)
}