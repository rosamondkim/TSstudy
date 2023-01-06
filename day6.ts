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

//회원정보.plusOne("하이롱"); => error

//(숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.

// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.

// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.

type CutType = (a: string) => string;

let cutZero: CutType = function (a) {
  return a.slice(0, 1) === "0" ? a.slice(1) : a;
};

// let cutZero: CutType = function (a) {
//   let result = a.replace(/^0+/, "");
//   return result;
// };

type RemoveType = (x: string) => number;

let removeDash: RemoveType = function (x) {
  return parseFloat(x.replace(/-/g, ""));
};

// (숙제3) 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.

// 이 함수는 어떻게 만들면 될까요?

// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

//1단계: 일반 자스 코드
// function 만들함수(a, func1, func2) {
//   let result = func1(a);
//   let result2 = func2(result);
//   console.log(result2);
// }

type 만들함수타입1 = (a: string) => string;
type 만들함수타입2 = (a: string) => number;

function 만들함수(a: string, func1: 만들함수타입1, func2: 만들함수타입2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}
// 만들함수('010-1234-5678',cutZero,removeDash)
