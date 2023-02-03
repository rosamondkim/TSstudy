// type alias에 함수 type 저장해서 쓰는 법
type 함수타입 = (a: string) => {};
// 1. 함수타입은 이렇게 화살표함수로 만들어야한다~!

type 함수타입2 = (a: string) => number;
// 이 함수 타입은 무조건 string 타입의 파라미터만 들어올 수 있고 number 타입의 결과만 리턴할 수 있다.

// 2. 함수 type alias 부착하려면 함수표현식 써야함
let 함수표현식 = function () {};

function 함수선언식() {}
// 요거는 함수선언식

// object 안에 함수 만들기
let 회원정보: Member = {
  name: "kim",
  age: 30,
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {
    console.log("이름이 변경되었습니다");
  },
};

type Member = {
  name: string;
  age: number;
  plusOne: (a: number) => number;
  changeName: (a: string) => void;
};

// 회원정보.plusOne("하이롱");
