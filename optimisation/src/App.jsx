import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Headphones", price: 2000 }
];

function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  // ✅ useMemo: recalculates ONLY when products change
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  // ✅ useCallback: function reference stays same across renders
  const handleProductSelect = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Total Price: ₹{totalPrice}</h2>

      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>

      <hr />

      <ProductList
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
