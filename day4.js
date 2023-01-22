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
// GirlFriend.name= '유라' => 에러남
// 타스 에러는 에디터 & 터미널에서만 존재함
// object 속성 안에도 ? 사용 가능
// ?는 name: string | undefiend 의 약자 (옵션이라고 생각하면 편함)
