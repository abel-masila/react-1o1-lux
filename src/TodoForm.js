import { useState, useEffect } from "react";
import axios from "axios";
const TodoForm = (props) => {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    console.log("Hey");
  }, [todo]);

  useEffect(async () => {
    const result = await axios(
      "https://hn.algolia.com/api/v1/search?query=redux"
    );

    console.log(result);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    //props.
    props.onFormSubmit(todo);
    //clear form
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Enter Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};
export default TodoForm;
