import { TitleComponent } from "./TitleComponent";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoContainer } from "./TodoContainer";
import { useEffect, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";

const LOCAL_STORAGE_KEY = "TODOS";

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const todoRef = useRef();

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setTodoArray(storedTodo || []);
  }, []);

  useEffect(() => {
    if (todoArray.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoArray));
    }
  }, [todoArray]);

  function toggleTodo(id) {
    setTodoArray((previousArray) =>
      previousArray.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  }

  function deleteTodo(id) {
    setTodoArray((todoArray) => todoArray.filter((todo) => todo.id !== id));
  }

  function editTodo(id) {
    setEditTodoId(id);
    setIsEditing(true);
  }

  function updateTodo(id) {
    setTodoArray((previousArray) =>
      previousArray.map((todo) => {
        if (todo.id === id) {
          return { ...todo, todo: editInput };
        } else {
          return todo;
        }
      })
    );
    setIsEditing(false);
  }

  function enterKey(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      updateTodo(editTodoId);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    if (todoRef.current.value === "") return;
    setTodoArray([
      ...todoArray,
      { todo: todoRef.current.value, complete: false, id: crypto.randomUUID() },
    ]);

    todoRef.current.value = "";
  }
  const editStyle = { opacity: 0.2, zIndex: 0 };
  const todoToEdit = todoArray.find((todo) => todo.id === editTodoId);

  useEffect(() => {
    if (todoToEdit) {
      setEditInput(todoToEdit.todo);
    }
  }, [todoToEdit]);

  return (
    <>
      <div className="body" style={isEditing ? editStyle : {}}>
        <div className="container">
          <TitleComponent></TitleComponent>
          {JSON.stringify(todoArray)}
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

          <TodoContainer>
            <TodoFilter></TodoFilter>
            <TodoList>
              {todoArray.map((todo, index) => {
                return (
                  <TodoItem
                    key={index}
                    {...todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                  />
                );
              })}
            </TodoList>
          </TodoContainer>
        </div>
      </div>
      {isEditing ? (
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
      ) : undefined}
    </>
  );
}
export default App;
