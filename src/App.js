import { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState(["task 1", "task 2", "task 3", "task 4"]);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleDelete = (index) => {
    const newArr = [...todos];
    newArr.splice(index, 1);
    setTodos(newArr);
  };

  const handleSubmit = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="wrapper">
      <div className="card frame">
        <Header numTodos={todos.length} />
        <TodoList todos={todos} onDelete={handleDelete} />
        <TodoForm onFormSubmit={handleSubmit} />
        <br />
        <br />
        {loggedIn ? <div>Logged In</div> : <div>Login</div>}
        <button className="button" onClick={() => setLoggedIn(!loggedIn)}>
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
