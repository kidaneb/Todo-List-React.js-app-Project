import { useContext } from "react";
import { ThemeContext } from "./App";


export function TodoItem({ todo, id, complete,toggleTodo, deleteTodo, editTodo,}) {
    const {isDarkMode} = useContext(ThemeContext);
  return (
    <>
      <div className={isDarkMode?`todo-dark`:`todo`}>
        <div className={isDarkMode?`text-container-dark`:`text-container`}>
          <span className={`text ${complete ? "line-through" : ""}`}>
            {todo}
          </span>
        </div>

        <div className="btn-container">
          <button className="btn btn-complete" onClick={() => toggleTodo(id)}>
            Complete
          </button>
          <button className="btn btn-edit" onClick={()=>editTodo(id)}>Edit</button>
          <button className="btn btn-delete" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
