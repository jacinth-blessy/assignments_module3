import React from "react";

const HeavyComponent = React.memo(() => {
  console.log("HeavyComponent rendered");

  // Simulate heavy computation
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Heavy Component</h3>
      <p>This component is expensive to render.</p>
    </div>
  );
});

export default HeavyComponent;
