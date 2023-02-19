// rest parameter 타입 지정 가능
function restParameterFun() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    // ... 붙이면 파라미터 무제한으로 넣을 수 있음. 이것이 rest parameter
    console.log(a);
    // rest parameter 자리에 들어온 데이터는 전부 [] 에 담아준다.
}
restParameterFun(1, 34, 234, 23, 4234);
var person = { student: true, age: 20 };
function 구조분해할당함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
구조분해할당함수({ student: true, age: 20 });
//(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈
function 최댓값리턴() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a.sort(function (a, b) { return b - a; })[0];
}
최댓값리턴(23, 43, 100, 4, 6);
function 숙제2함수(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log({ user: user, comment: comment, admin: admin });
}
function 숙제3함수(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log([a, b, c]);
}
