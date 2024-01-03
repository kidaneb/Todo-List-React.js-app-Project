import { TodoItem } from "./TodoItem";
export function TodoList({children,isDarkMode}) {
  return (
    <>
      <div className={isDarkMode?`todos-list-dark`:`todos-list`}>
            {children}
          </div>
    </>
  );
}
