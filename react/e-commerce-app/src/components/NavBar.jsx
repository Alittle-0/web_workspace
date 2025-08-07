import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProducts } from "../hooks/useProducts";
import "./NavBar.css";

function Navigation({ filters, setFilters }) {
  const { getTotalItems } = useCart();
  const { categories, loading } = useProducts();

  const displayCategories = loading ? ["All"] : categories;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="section-left">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <img src="/logo512.png" alt="logo" className="logo" />
                <span className="logo-text">Fake Store</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="section-center">
          <div className="filter-bar">
            <input
              type="text"
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
              placeholder="Search"
              className="filter-input"
            />
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
              className="filter-select"
            >
              {displayCategories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: e.target.value })
              }
              className="filter-input"
            />
          </div>
        </div>

        <div className="section-right">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Cart ({getTotalItems()})
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/checkout"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Checkout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
