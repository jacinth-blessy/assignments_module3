import { useState } from "react";
import { TodoContext } from "./TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Todos() {
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      <AddTodo />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default Todos;
