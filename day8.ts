// rest parameter 타입 지정 가능

function restParameterFun(...a) {
  // ... 붙이면 파라미터 무제한으로 넣을 수 있음. 이것이 rest parameter
  console.log(a);
  // rest parameter 자리에 들어온 데이터는 전부 [] 에 담아준다.
}
restParameterFun(1, 34, 234, 23, 4234);

// function restParameterFun(...a:number[]) { => 숫자만 들어올 수 있다면. number Array 타입 지정해줘야

// ... 의  용도 :
// 1. 함수 안에다가 쓰면 rest parameter
// 2. Spread operator : arr나 obj 앞쪽에 쓰면, 괄호 벗기는 용도
// 3.Destructuring

// let 사람 = { student : true, age : 20 }
// let student = 사람.student;
// let 사람의나이 = 사람.age
// 이렇게 쓰면 귀찮으니까
// let { student, age } = { student : true, age : 20 }

// Destructuring 문법도 함수 파라미터에 사용가능

interface 인간이다 {
  student: boolean;
  age: number;
}

let person = { student: true, age: 20 };

function 구조분해할당함수({ student, age }: 인간이다) {
  console.log(student, age);
}
구조분해할당함수({ student: true, age: 20 });

//(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈

function 최댓값리턴(...a: number[]) {
  return a.sort((a, b) => b - a)[0];
}
최댓값리턴(23, 43, 100, 4, 6);

//(숙제2) 함수( { user : 'kim', comment : [3,5,4], admin : false }) 이렇게 생긴걸 파라미터로 입력할 수 있는 함수

type 숙제2함수객체 = {
  user: string;
  comment: number[];
  admin: boolean;
};

function 숙제2함수({ user, comment, admin }: 숙제2함수객체) {
  console.log({ user, comment, admin });
}

// 숙제 3 이렇게 생긴 arr 자료 파라미터로 입력할 수 있는 함수 만들어보시오 함수( [40, 'wine', false] )
type 어레이 = (number | string | boolean)[];
function 숙제3함수([a, b, c]: 어레이) {
  console.log([a, b, c]);
}
