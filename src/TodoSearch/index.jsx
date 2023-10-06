import React from "react";
import "./TodoSearch.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { state, setState } = useContext(TodoContext);

  return (
    <input
      placeholder="Buscar TODOs"
      className="TodoSearch"
      value={state}
      onChange={(event) => {
        setState(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
