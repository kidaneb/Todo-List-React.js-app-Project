import { useContext } from "react";
import { Contexts } from "./App";
export function TodoInputForm() {

  const { todoRef, onSubmit, isDarkMode } = useContext(Contexts)

  return (
    <>
      <div className="input-forms">
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter new todo"
            className={isDarkMode ? `todo-input-dark` : `todo-input`}
            ref={todoRef}
          />
          <div>
            <button type="submit" className="todo-submit-btn">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
