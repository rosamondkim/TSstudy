/// Object 타입 지정시 interface 사용가능

interface Square {
  color: string;
  width: number;
}

let 네모: Square = { color: "red", width: 100 };

interface Student {
  name: string;
}

//class 처럼 extends로 복사 가능함
interface Teacher extends Student {
  name: string;
  age: number;
}
let 학생: Student = { name: "kim", dday: 3 };
let 선생: Teacher = { name: "jang", age: 20, dday: 5 };

// interface 장점: extends 로 복사 가능

type 동물들 = { name: string };
type 고양이 = { age: number } & 동물들;

// type vs interface
// interface는 중복 선언가능하지만 type은 어렵다

interface Student {
  dday: number;
}
// 자동으로 추가됨.interface는 유연하다.

// type 동물들 = {age:number} 타입은 엄격해서 안된다. error

// extedns 쓸 때 중복 속성 발생하면? => 에러로 잡아줌
// & 쓸 때는 중복속성 발생하지 않는다. 주의

//(숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

//(숙제2) array 안에 object 여러개가 필요합니다.
// 쇼핑몰 장바구니를 구현하려고 하는데
// let 장바구니 = [
//   { product: "청소기", price: 7000 },
//   { product: "삼다수", price: 800 },
// ];
//이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?
// 오늘 배운 interface 문법을 써봅시다.

interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];
