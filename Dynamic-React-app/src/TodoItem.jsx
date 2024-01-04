import { useContext } from "react";
import { Contexts } from "./App";

export function TodoItem({ todo, id, complete}) {
  const {toggleTodo, deleteTodo, editTodo, isDarkMode} = useContext(Contexts);
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
