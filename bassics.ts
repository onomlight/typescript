//Primitives : number, string, boolean
// More complex types : arrays, objects
//Function types, parameters



// primitives 기본타입

// 숫자형 문자열 논리형 주요 기본형 타입
let age : number;
//이러면 변수 선언끝

age = 12; // 함수와 매개 변수여서 '' 사용어려움

let userName : string; //뮨자욜
//타입스크립트는 타입표기는 소문자로 시작함 java처럼 대문자아님

userName = 'Max'

let isInstructor : boolean; // 변수 생성 후 타입을 지정하면 논리값 저장
isInstructor = true
//문자열 배열 타입
let hobbies : string[];
// 타입스크립트에게 문자열 배열을 저장할거라고 알릴려면 stringaks 쓰지말고
// 대괄호를 붙여야함 문자열만 가능하며 숫자 추가시 오류 발생
hobbies = ['스포츠','쿠키',] ;  

// 배열타입은 위 처럼 저장하면됨

// 객체저장시
let person: {
    name: string;
    age: number;
};

person = {
    name: ' 매긋',
    age : 32
}
// 여기에만 저장하게하고
// person = {
//     isEmployee : true
//     // 부울값을 가진 객체는 저장되지 않음
// }
//다른 구조에 가진 객체는 저장하지 않게 하고싶음



let people:{
    name: string;
    age: number;
} [];
// 배열로 만들려면 대괄호 붙여야함