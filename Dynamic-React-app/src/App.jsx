import { TitleComponent } from "./TitleComponent";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoContainer } from "./TodoContainer";
import { TodoInputForm } from "./TodoInputForm";
function App() {
  return (
    <div class="body">
      <div class="container">
        <TitleComponent></TitleComponent>
        <TodoInputForm></TodoInputForm>
        <TodoContainer>
          <TodoFilter></TodoFilter>
          <TodoList></TodoList>
        </TodoContainer>
      </div>
    </div>
  );
}
export default App;
