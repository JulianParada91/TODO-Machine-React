import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoButton.css";

function TodoButton() {
  const { setOpenModal } = useContext(TodoContext);
  return (
    <button
      className="TodoButton"
      onClick={() => setOpenModal((prev) => !prev)}
    >
      +
    </button>
  );
}

export { TodoButton };
