//Primitives : number, string, boolean
// More complex types : arrays, objects
//Function types, parameters



// primitives 기본타입

// 숫자형 문자열 논리형 주요 기본형 타입
let age : number;
//이러면 변수 선언끝

age = 12; // 함수와 매개 변수여서 '' 사용어려움

let userName : string | string[]; //뮨자욜 + 유니온을 사용할 경우 더 부드럽게 사용할수있음 

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

type Person = 
{
    name: string;
    age: number;
};
// 타입스크립트에 추가되는 부분이고, 타입 키워드 뒤에 원하는 이름을 붙이면됨
// 타입스크립트안에서만 존재하는 기능이며 자바스크립트로 컴파일시 사라짐
// = 오른쪽에 있는건 js의 value 가 아니라 타입을 정의한것



// 객체저장시
let person:Person

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



let people:Person [];
// 배열로 만들려면 대괄호 붙여야함
//+ 중복을 막기위해 타입별칭을 만듬



//타입 추론(type inference)

let coures : string | number  = 'React - The Complete Guide';

coures = 12341;
//  타입스크립트 핵심기능인 타입추론기능

//한개이상의 타입을 지정하게 해주는 기능 유니온(union) 타입

//유니온 타입은 타입을 정의할때 한개 이상의 타입을 사용할수있음




//Functions & types

function add(a:number,b:number){ // 함수 이름에 커서를 가져되면 어떻게 정의하는 지 볼 수 있음
return a + b ;
}

//function add(a: number, b: number): number
// 커서시 이렇게 팝업되나 타입스크립트에서 숫자형이라고 추론한것
// : 을 붙이고 그뒤에 반환 타입을 지정하면됨 숫자형 문자열 유니온으로 지정도 가능


function print(value: any) {
    console.log(value);
}



// 타입스크립트에서 제일 중요한게 제네릭 기능
// Generics 
//<T>

function insertAtBeginning<T>(array : T[], value:T){
    const newArray = [value,...array];
    // 전개연산자 ... 를 이용해 기존 배열 복사 => 해당 기능은 모던자바스크립트도 지원하고 타입스크립트도 지원
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1); // 이렇게하면 -1이 배열에 삽입 , -1,1,2,3 배열반환
const stringArray = insertAtBeginning(['a','b','c',],'d')


// updatedArray[0].split('');