import { AppContext } from "./AppContext";
import Component2 from "./Component2";

const defaultContext = { a: "a", b: "b", c: "c", d: "d", e: "e", f: "f" };

function Component1() {
  return (
    <AppContext.Provider value={defaultContext}>
      <Component2 />
    </AppContext.Provider>
  );
}

export default Component1;
