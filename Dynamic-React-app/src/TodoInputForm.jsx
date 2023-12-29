export function TodoInputForm() {
  return (
    <>
      <div class="input-forms">
        <form class="form">
          <input type="text" placeholder="Enter new todo" class="todo-input" />
          <div>
            <button type="button" class="todo-submit-btn">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
