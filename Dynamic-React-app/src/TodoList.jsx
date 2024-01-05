import { TodoItem } from "./TodoItem";
import { useContext } from "react";
import { ThemeContext } from "./App";

export function TodoList({ children}) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={isDarkMode ? `todos-list-dark` : `todos-list`}>
        {children}
      </div>
    </>
  );
}
