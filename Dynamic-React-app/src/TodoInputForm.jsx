

export function TodoInputForm({todoRef,onSubmit}) {
  
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
            <button type="submit" className="todo-submit-btn">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
