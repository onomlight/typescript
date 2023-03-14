import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void; // (event: React.MouseEvent) 인수는 선택사항임으로 입력안해도됨!
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {" "}
      {props.text}
    </li>
  );
};

export default TodoItem;
