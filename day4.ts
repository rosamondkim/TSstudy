// 타입이 너무 길고 복잡하면 변수에 담아  쓸 수 있다
// type alias(별칭) 만들고 변수에 담기

type Animal = string | number | undefined;
let 동물: Animal = 123;

type Animal2 = { name: string; age: number };
let 동물2: Animal2 = { name: "kim", age: 20 };

const 출생지역 = { region: "seoul" };
출생지역.region = "busan";

// TS에는 object 자료 수정도 막을 수 있음 => 타스 파일 내에서만

const 여친 = {
  name: "엠버",
};
여친.name = "유라";

type Gf = {
  readonly name: string;
  // readonly 읽기전용 => 실수로 수정하면 에러내줌
};
const GirlFriend: Gf = {
  name: "엠버",
};

// GirlFriend.name= '유라' => 에러남
// 타스 에러는 에디터 & 터미널에서만 존재함

// object 속성 안에도 ? 사용 가능
// ?는 name: string | undefiend 의 약자 (옵션이라고 생각하면 편함)

// type 변수도 당연히 union type으로 합치기 가능
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 obj 타입 합치기(extend 하기)
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;
let position: NewType = { x: 10, y: 20 };

// 같은 이름의 type 변수 재정의 불가능
