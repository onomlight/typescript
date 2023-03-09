class Todo {
    id: string;
    text: string;

    constructor(todoText:string){
        this.text = todoText;
        this.id = new Date().toISOString();
        //날짜를 가져와 문자열로 바꿔사용
    }
}// 타입스크립트로 class 정의

export default Todo;