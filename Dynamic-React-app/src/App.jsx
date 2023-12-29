import { TitleComponent } from "./TitleComponent";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoContainer } from "./TodoContainer";
import { useRef, useState } from "react";
function App() {
  const [todoArray, setTodoArray] = useState([]);
  // const todoRef = useRef();
  function onSubmit(e){
    
    e.preventDefault();
    console.log("car")
  }
  return (
    <div className="body">
      <div className="container">
        <TitleComponent></TitleComponent>
        
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


        <TodoContainer>
          <TodoFilter></TodoFilter>
          <TodoList></TodoList>
        </TodoContainer>
      </div>
    </div>
  );
}
export default App;
