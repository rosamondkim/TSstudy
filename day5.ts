// 더 엄격한 type 지정 가능.

let 나의성: "kim"; // 나의성 이라는 변수에는 무조건 kim 만 들어올 수 있음
나의성 = "kim";
// 나의성 = "park"; (err)

let 접니다: "긴머리" | "눈물";
// 접니다 = '짧은머리' (err)

// literal types = 변수에 뭐가 들어올지 더 엄격하게 관리 가능. 자동완성 가능

function 함수임(a: "hello"): 1 | 0 {
  // 함수 파라미터 자리에 들어오는것도 제한할 수 있음
  return 1; // return 값도 제한할 수 있음
}
함수("hello");

// 만들어보자
// 1. 가위 or 바위 or 보 중 1개 입력 가능
// 2. 가위 or 바위 or 보 만 들어올 수 있는 arr 리턴해야함

function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}
함수("가위");

// const 변수의 한계
const 변수 = "대머리";

// Literal Type => string,number만 타입이 될 수 있는게 아니라, 일반 글자도 타입 될 수 있음.
let 리터럴이짱이다: "대머리" | "머머리";
// literal type은 const 변수와 유사하게 사용 가능. but 여러개 지정 가능

var 자료임 = {
  name: "kim",
} as const;

// as const 라는 것을 object 자료에 붙여서 obj 를 잠글 수 있다
// 1. 타입을 obj의 value로 바꿔준다 (ex 타입을 kim으로 바꿔줌)
// 2. obj 안에 있는 모든 속성을 readonly 로 바꿔준다 (변경하면 에러나게)



function 함수입니다(a: "kim") {}

함수입니다(자료임.name);

