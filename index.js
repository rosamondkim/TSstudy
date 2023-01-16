var 이름 = "kim";
var 회원들 = ["kim", "park"];
// arr 안에 들어갈 type을 지정해줘야함. number나 string 이나
var 회원놈들 = {
    member1: "kim",
    member2: "park",
};
// 변수 하나에 여러자료 집어넣고 싶으면 object 자료형 써도 가능. object 자료에도 타입 지정 가능
// 타입지정 원래 자동으로 된다. 문법 생략해도 됨
var 내이름 = "ming";
var 내나이 = 27;
var 내고향 = "서울";
var 요즘최애곡 = {
    가수: "백예린",
    제목: "i am not your ocean anymore",
};
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// 문자 or 숫자 들어올 수 있는 변수는 어떻게 만드나? => Union Type
var 회원 = 123;
var 인간들 = [1, "2", 3];
var 오브젝트 = { a: "123" };
// any타입: 모든 자료형 허용해줌 => 타입실드 해제 문법
var 성함;
성함 = 123;
성함 = true;
// unknown 타입 : 모든 자료형 허용. 타입실드 해제하진 않음
var 닉네임;
// any 보다 안전함.
// 타입스크립트 엄격함에 대해
// 간단한 수학 연산도 각각 타입이 맞아야한다
// unknown은 number 타입이 아니다
var 나이;
// 나이 +1;
//=> 에러난다. 타입 맞는데 +1 왜안되는지?
// => string 타입 +1 (허용) / number타입 +1 (허용) string|number 타입+1 (이건안돼~)
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
