function 함수1(x: number) {
  // 함수 만들었을때도 타입 지정 가능하다.
  // 아무 타입 지정 안하면 any 타입 (타입스크립트 사용 안하겠다~)
  return x * 2;
}
함수1(2);

//return에 타입 지정도 가능하다
function 함수2(x: number): Boolean {
  return true;
}
// error: 함수2('6')

// 함수에서 void 타입 활용 가능 (어떤 값도 return 하고 싶지 않을때)
function voidFunc(x: number): void {
  //return이 없을 경우 (아무것도 리턴하지 말아라!)
  // return 1+1 =>이거 에러남.
  1 + 1;
}

// 자바스크립트와 다른 점?
// 타입 지정된 파라미터는 필수다.

function 함수3(x?: number): void {
  // 파라미터가 옵션일 경우엔 물음표 넣어주기
}
함수3();

// object 자료형에도 key값에 물음표 넣을 수 있다.
// {age?:number}

function 함수4(x: number | undefined): void {
  // ** 중요
  // 변수 ?:number 는 변수 number | undefined와 같음
  // 이 변수는 number 혹은 unde 들어올 수 있다~
}

// 네로잉 어쩌구
//애매한 타입들은 미리 타입 검사 필요

function 함수5(x: number | string): void {
  // return x *2
  // 위에거 에러남. 왜? x는 지금 number도 string도 아닌 Union Type(숫자or문자 들어올 수 있는 변수)이다. 그래서 연산 안해주는것임..
  // string + number (가능)
  // number + number (가능)
  // 이외 불가능
}
함수5(2);

// function 함수6(x?: number): number {
// return x * 2;
// =>x라는 파라미터는 옵션이고, 옵션인 파라미터는 number | undefined 이런 식으로 타입정의가 된다
// 그래서 아직 x라는 파라미터가 뭔지 확실하지 않기 때문에 에러를 내준다.
// }

function 함수7(x: number | string): void {
  // if(x의 타입이 숫자면){
  //   console.log(x+3)
  // }
}

// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다.

function 숙제1(x?: string): string {
  if (x) {
    return "안녕하세요" + x;
  } else {
    return "이름이 없습니다";
  }
}
숙제1("홍길동");

// 숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.

function 숙제2(x: number | string): number {
  return x.toString().length;
}

// 1.문자에 length 붙이면 자릿수 세주는데, 숫자는 붙일 수 없으니 문자로 변환
