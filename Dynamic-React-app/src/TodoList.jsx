import { TodoItem } from "./TodoItem";
export function TodoList({children}) {
  return (
    <>
      <div className="todos-list">
            {children}
          </div>
    </>
  );
}
