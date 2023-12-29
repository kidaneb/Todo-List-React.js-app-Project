import { useRef } from "react";

export function TodoInputForm({ onSubmit}) {
  const todoRef = useRef();
  return (
    <>
      <div className="input-forms">
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter new todo"
            className="todo-input"
            ref={todoRef}
          />
          <div>
            <button type="button" className="todo-submit-btn">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
