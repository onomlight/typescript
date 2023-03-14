import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  const addTodoHandler = (todoText: string) => {};
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      {/* 배열을 바뀌면서 todos 컴포턴트 업데이트하며, 다시 new로 줘야함 */}
      <Todos items={todos} />
    </div>
  );
}

export default App;
