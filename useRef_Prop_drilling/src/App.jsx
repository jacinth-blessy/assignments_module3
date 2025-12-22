import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <VideoPlayer />
    </div>
  );
}

export default App;
