import { useState, createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOs_V1", []);

  const [state, setState] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const textTodo = todo?.text?.toLowerCase();
    const stateTodo = state.toLowerCase();
    return textTodo?.includes(stateTodo);
  });

  const addTodo = (text) => {
    if (text !== "") {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false,
      });
      saveTodos(newTodos);
    } else {
      alert("Debes que escribir tu nuevo TODO");
    }
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  console.log(`Los usuarios buscan TODOs de ${state}`);

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        state,
        setState,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
