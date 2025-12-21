import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

export default function TodosList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    let mounted = true;

    async function fetchTodos() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos", { signal });
        const data = await res.json();
        if (mounted) {
          setTodos(data.slice(0, 15));
          setLoading(false);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setLoading(false);
        }
      }
    }

    fetchTodos();

    return () => {
      mounted = false;
      controller.abort();
      alert("cleanup worked");
    };
  }, []);

  if (loading) return <div>Loading todos...</div>;

  return (
    <div style={{ marginTop: 16 }}>
      {todos.map((t) => (
        <TodoCard key={t.id} userId={t.userId} title={t.title} completed={t.completed} />
      ))}
    </div>
  );
}
