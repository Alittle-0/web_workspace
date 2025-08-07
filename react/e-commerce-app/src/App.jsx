import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import CheckoutPage from "./pages/checkout";
import ProductDetailsPage from "./pages/product";

function App() {
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    maxPrice: "",
  });

  return (
    <CartProvider>
      <BrowserRouter>
        <Navigation filters={filters} setFilters={setFilters} />
        <Routes>
          <Route path="/" element={<HomePage filters={filters} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
