import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import "./home.css";

function HomePage({ filters }) {
  const { addToCart } = useCart();
  const { products, loading, error } = useProducts();

  // Show loading state
  if (loading) {
    return (
      <div className="home-container">
        <h1 className="home-title">Product Catalog</h1>
        <div className="loading-container">
          <p className="loading-text">Loading products...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="home-container">
        <h1 className="home-title">Product Catalog</h1>
        <div className="error-container">
          <p className="error-text">Error loading products: {error}</p>
        </div>
      </div>
    );
  }

  const filtered = products.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchCat =
      filters.category === "All" ||
      p.category.toLowerCase() === filters.category.toLowerCase();
    const matchPrice =
      !filters.maxPrice || p.price <= parseFloat(filters.maxPrice);
    return matchSearch && matchCat && matchPrice;
  });

  return (
    <div className="home-container">
      <h1 className="home-title">Product Catalog</h1>
      <div className="products-grid">
        {filtered.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`} className="product-link">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">${product.price}</p>
            </Link>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
