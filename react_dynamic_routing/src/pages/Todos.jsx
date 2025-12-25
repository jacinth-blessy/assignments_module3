import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div style={{ width: "400px", margin: "30px auto" }}>
      <h2>Todos</h2>

      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <Link to={`/todos/${todo.id}`}>
            <strong>{todo.title}</strong>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Todos;
