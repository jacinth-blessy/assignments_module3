import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <VideoPlayer />
       <Component1
      a = "Blessy"
      b = "Calvary"
      c = "Kumar"
      d = "Jacinth"
      e = "Mamidi"
      f = "Jenugu"
    />
    </div>
  );
}

function Component1({ a, b, c, d, e, f }) {
  return <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />;
}

function Component2({ a, b, c, d, e, f }) {
  return <Component3 a={a} b={b} c={c} d={d} e={e} f={f} />;
}

  function Component3({ a, b, c, d, e, f }) {
  return (
    <>
      <div>
        <h4>{a}, {b}</h4>
      </div>
      <Component4 c={c} d={d} e={e} f={f} />
    </>
  );
}

function Component4({ c, d, e, f }) {
  return (
    <>
      <div>
        <h4>{c}, {d}</h4>
      </div>
      <Component5 e={e} f={f} />
    </>
  );
}

function Component5({ e, f }) {
  return (
    <>
      <div>
        <h4>{f}</h4>
      </div>
      <Component6 e={e}/>
    </>
  );
}

function Component6({ e }) {
  return <div><h4>{e}</h4></div>;
}

export default App;
