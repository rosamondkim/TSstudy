// 이 함수 타입은 무조건 string 타입의 파라미터만 들어올 수 있고 number 타입의 결과만 리턴할 수 있다.
// 2. 함수 type alias 부착하려면 함수표현식 써야함
var 함수표현식 = function () { };
function 함수선언식() { }
// 요거는 함수선언식
// object 안에 함수 만들기
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("이름이 변경되었습니다");
    },
};
var cutZero = function (a) {
    return a.slice(0, 1) === "0" ? a.slice(1) : a;
};
var removeDash = function (x) {
    return parseFloat(x.replace(/-/g, ""));
};
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
// 만들함수('010-1234-5678',cutZero,removeDash)
