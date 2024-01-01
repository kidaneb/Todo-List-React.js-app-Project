export function TodoItem({ todo, id, complete, toggleTodo, deleteTodo }) {
  return (
    <>
      <div className="todo">
        <div className="text-container">
          <span className={`text ${complete ? "line-through" : ""}`}>
            {todo}
          </span>
        </div>

        <div className="btn-container">
          <button className="btn btn-complete" onClick={() => toggleTodo(id)}>
            Complete
          </button>
          <button className="btn btn-edit">Edit</button>
          <button className="btn btn-delete" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
