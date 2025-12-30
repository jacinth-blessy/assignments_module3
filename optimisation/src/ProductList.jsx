function ProductList({ products, onProductSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
          <button onClick={() => onProductSelect(product)}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
