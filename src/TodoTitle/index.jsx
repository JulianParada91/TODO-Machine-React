import { TodoContext } from "../TodoContext";
import "./TodoTitle.css";
import { useContext } from "react";

function TodoTitle() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1 className="TodoTitle">
      Haz completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOs
    </h1>
  );
}

export { TodoTitle };
