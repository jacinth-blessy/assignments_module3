import React, { useState } from "react";
import StatusComponent from "./StatusComponent";
import ConditionalStyling from "./ConditionalStyling";
import TodosList from "./TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <StatusComponent />
      <ConditionalStyling />

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setShowTodos((s) => !s)}>
          {showTodos ? "Unmount Todos" : "Mount Todos"}
        </button>
      </div>

      {showTodos && <TodosList />}
    </div>
  );
}

export default App;
