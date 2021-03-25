import Todo from "./Todo";
const TodoList = (props) => {
  console.log(props);
  const todos = props.todos.map((todo, index) => {
    return (
      <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    );
  });
  return <div class="list-wrapper">{todos}</div>;
};

export default TodoList;
