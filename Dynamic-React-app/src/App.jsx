import { TitleComponent } from "./TitleComponent";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoContainer } from "./TodoContainer";
import { createContext, useEffect, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";
import { EditForm } from "./EditForm";
import { TodoInputForm } from "./TodoInputForm";
import { AppContainer } from "./AppContainer";
import { AppBody } from "./AppBody";

const LOCAL_STORAGE_KEY = "TODOS";
const DARK_MODE_KEY = "MODE";

export const EditContext = createContext();
export const FilterContext = createContext();
export const ThemeContext = createContext();

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const todoRef = useRef();
  const [filterText, setFilterText] = useState("");
  const [isError, setIsError] = useState(false);
  const [hideComplete, setHideComplete] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = JSON.parse(localStorage.getItem(DARK_MODE_KEY));

    setIsDarkMode((currentMode) => {
      if (storedMode != null) {
        return storedMode;
      } else {
        return false;
      }
    });
  }, []);

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setTodoArray(storedTodo || []);
  }, []);

  useEffect(() => {
    if (todoArray.length > 0)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoArray));
  }, [todoArray]);

  const todoToEdit = todoArray.find((todo) => todo.id === editTodoId);
  useEffect(() => {
    if (todoToEdit) {
      setEditInput(todoToEdit.todo);
    }
  }, [todoToEdit]);

  let filteredArray = todoArray.filter((todo) => {
    return todo.todo.includes(filterText);
  });
  if (hideComplete) {
    filteredArray = filteredArray.filter((todo) => {
      return todo.complete === false;
    });
  }
  let Error;
  if (todoArray.length !== 0) {
    Error = filteredArray.length === 0;
  }
  useEffect(() => {
    setIsError(Error);
  }, [Error]);
  function toggleDarkMode() {
    setIsDarkMode((prevMode) => {
      localStorage.setItem(DARK_MODE_KEY, JSON.stringify(!prevMode));
      return !prevMode;
    });
  }

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
    setTodoArray((prevTodoArray) => {
      const updateArray = prevTodoArray.filter((todo) => todo.id !== id);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateArray));
      return updateArray;
    });
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

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      <AppBody isEditing={isEditing}>
        <AppContainer>
          <TitleComponent toggleDarkMode={toggleDarkMode}></TitleComponent>

          <TodoInputForm todoRef={todoRef} onSubmit={onSubmit}></TodoInputForm>

          <TodoContainer>
            <FilterContext.Provider
              value={{
                filterText,
                setFilterText,
                isError,
                hideComplete,
                setHideComplete,
              }}
            >
              <TodoFilter></TodoFilter>
            </FilterContext.Provider>

            <TodoList>
              {filteredArray.map((todo, index) => {
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
        </AppContainer>
      </AppBody>

      <EditContext.Provider
        value={{
          setIsEditing,
          editInput,
          setEditInput,
          editTodoId,
          enterKey,
          updateTodo,
        }}
      >
        {isEditing ? <EditForm></EditForm> : undefined}
      </EditContext.Provider>
    </ThemeContext.Provider>
  );
}
export default App;
