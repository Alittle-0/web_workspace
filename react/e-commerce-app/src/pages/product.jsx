import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProduct } from "../hooks/useProducts";
import "./product.css";

function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { product, loading, error } = useProduct(id);

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-text">Error loading product: {error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="not-found-container">
        <p className="not-found-text">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <div className="product-image-section">
        <img
          src={product.image}
          alt={product.name}
          className="product-details-image"
        />
      </div>

      <div className="product-info-section">
        <h2 className="product-details-title">{product.name}</h2>
        <p className="product-details-category">{product.category}</p>
        <p className="product-details-price">${product.price}</p>
        <p className="product-details-description">{product.description}</p>
        {product.rating && (
          <p className="product-rating">
            Rating: {product.rating.rate}/5 ({product.rating.count} reviews)
          </p>
        )}
        <button
          className="product-details-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
