let 이름: string = "kim";
let 회원들: string[] = ["kim", "park"];
// arr 안에 들어갈 type을 지정해줘야함. number나 string 이나

let 회원놈들: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};
// 변수 하나에 여러자료 집어넣고 싶으면 object 자료형 써도 가능. object 자료에도 타입 지정 가능

// 타입지정 원래 자동으로 된다. 문법 생략해도 됨

let 내이름: string = "ming";
let 내나이: number = 27;
let 내고향: string = "서울";

let 요즘최애곡: { 가수: string; 제목: string } = {
  가수: "백예린",
  제목: "i am not your ocean anymore",
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// 문자 or 숫자 들어올 수 있는 변수는 어떻게 만드나? => Union Type
let 회원: number | string = 123;
let 인간들: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: "123" };

// any타입: 모든 자료형 허용해줌 => 타입실드 해제 문법
let 성함: any;
성함 = 123;
성함 = true;

// unknown 타입 : 모든 자료형 허용. 타입실드 해제하진 않음
let 닉네임: unknown;
// any 보다 안전함.

// 타입스크립트 엄격함에 대해
// 간단한 수학 연산도 각각 타입이 맞아야한다
// unknown은 number 타입이 아니다

let 나이: string | number;
// 나이 +1;
//=> 에러난다. 타입 맞는데 +1 왜안되는지?
// => string 타입 +1 (허용) / number타입 +1 (허용) string|number 타입+1 (이건안돼~)

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];


let 학교 = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]