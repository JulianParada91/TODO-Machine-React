import { useContext } from "react";
import { TodoTitle } from "../TodoTitle";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";
import { TodoLoanding } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { EmptyTodo } from "../EmptyTodo";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal } =
    useContext(TodoContext);

  return (
    // <div className="App"> {/* Esto no es .html sino .jsx, es una sintapsis que nos permite combinar .html con .js convirtiéndose en .jsx*/}
    <>
      {/*Se implementa React.Fragment (Simbolos <> </>) para no tener todos los componentes dentro de un <div/>*/}
      <TodoTitle />
      <TodoSearch />

      <TodoList>
        <>
          {loading && (
            <>
              <TodoLoanding />
              <TodoLoanding />
              <TodoLoanding />
            </>
          )}

          {error && <TodoError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodo />}

          {searchedTodos.map((todo /*Renderizamos un array*/) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </>
      </TodoList>

      <TodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      {/* </div> */}
    </>
  );
}

export { AppUI };
