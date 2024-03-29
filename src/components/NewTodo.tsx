import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC = () => {
  //react.fc<{}> => 제네릭 타입특성을 이용해서 프로퍼티 객체를 구체적으로 정의함
  //이후에 함수를 정의하여 함수타입으로 한 후 화살표 함ㄴ수 작성함
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  // useRef 자체가 제네릭 타입을 이용해 사용가능함
  // 오류가 계속 뜨는 이유는 기본값을 직접 설정하지 않았기 때문임
  // 다른 요소가 할당되어있을때 자동지정해야함 / 만근게 없음으로 null로 입력을 하면 ref에 오류가 사라짐
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    //submitHandler 안에 enteredText 가져올수있음
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
//폼제출을 처리하고 기본동작 막는것
