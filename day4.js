// 타입이 너무 길고 복잡하면 변수에 담아  쓸 수 있다
// type alias(별칭) 만들고 변수에 담기
var 동물 = 123;
var 동물2 = { name: "kim", age: 20 };
var 출생지역 = { region: "seoul" };
출생지역.region = "busan";
// TS에는 object 자료 수정도 막을 수 있음 => 타스 파일 내에서만
var 여친 = {
    name: "엠버",
};
여친.name = "유라";
var GirlFriend = {
    name: "엠버",
};
var position = { x: 10, y: 20 };
// 같은 이름의 type 변수 재정의 불가능
