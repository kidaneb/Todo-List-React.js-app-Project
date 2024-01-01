import { TitleComponent } from "./TitleComponent";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoContainer } from "./TodoContainer";
import { useEffect, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";

const LOCAL_STORAGE_KEY = "TODOS";

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const todoRef = useRef();

  
  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setTodoArray(storedTodo || []);
  }, []); 

  
  useEffect(() => {
      if(todoArray.length > 0){

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

  function onSubmit(e) {
    e.preventDefault();
    if (todoRef.current.value === "") return;
    setTodoArray([
      ...todoArray,
      { todo: todoRef.current.value, complete: false, id: crypto.randomUUID() },
    ]);

    todoRef.current.value = "";
  }
  return (
    <div className="body">
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
                />
              );
            })}
          </TodoList>
        </TodoContainer>
      </div>
    </div>
  );
}
export default App;
