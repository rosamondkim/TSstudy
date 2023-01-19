// 어떤 변수의 type이 아직 불확실할 경우 Type Narrowing 써야한다. (타입을 하나로 정한다. 거른다)
// Narrowing으로 판정해주는 문법들 => typeof 변수, 속셩명 in 오브젝트자료 , 인스턴스 instanceof 부모
function 내함수(x) {
    // return x+1 => 제대로 실행되지 않는 이유? 타입 애매해서
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
내함수(132);
// narrowing 귀찮다? => assertion 문법 사용 (타입 덮어쓰기)
function 함수(x) {
    var arr = [];
    arr[0] = x;
    // as number => 왼쪽의 변수를 number로 덮어써주세요
}
// as 문법의 용도
// 1. Narrowing 할 때 씀
// 2. 무슨 타입이 들어올지 100% 확실할 때 사용하기
// 1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나
// 2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때
// 숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function 클리닝함수(a) {
    var 클리닝완료된거 = [];
    a.forEach(function (b) {
        if (typeof b === "string") {
            클리닝완료된거.push(parseFloat(b));
        }
        else {
            클리닝완료된거.push(b);
        }
    });
    return 클리닝완료된거;
}
console.log(클리닝함수([123, "3"]));
// parseFloat() 이란
// parseFloat() 함수는 주어진 값을 필요한 경우 문자열로 변환한 후 부동소수점 실수로 파싱해 반환합니다.
console.log(parseFloat("2"));
// 2
// 숙제2
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.
// 철수쌤같은 선생님 object 자료를 집어넣으면
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다.
