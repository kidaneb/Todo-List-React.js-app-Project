export function EditForm({setIsEditing,editInput,setEditInput,enterKey,updateTodo}) {
  return (
    <>
      <div className="edit-box">
        <button className="close1" onClick={() => setIsEditing(false)}>
          X
        </button>

        <input
          type="text"
          className="edit-input"
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
          onKeyDown={enterKey}
          autoFocus
        />
        <div className="edit-btn-container">
          <button
            type="button"
            className="save"
            onClick={() => updateTodo(editTodoId)}
          >
            save
          </button>
          <button
            type="button"
            className="close2"
            onClick={() => setIsEditing(false)}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
}
