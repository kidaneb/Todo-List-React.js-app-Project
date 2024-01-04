import { TodoItem } from "./TodoItem";
import { Contexts } from "./App";
import { useContext } from "react";
export function TodoList({children}) {
  const {isDarkMode} = useContext(Contexts);
  return (
    <>
      <div className={isDarkMode?`todos-list-dark`:`todos-list`}>
            {children}
          </div>
    </>
  );
}
