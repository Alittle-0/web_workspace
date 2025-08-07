import React from "react";
import { useTheme } from "./ThemeContext";
import "./ThemeToggle.css";

function ThemeToggle() {
  const { currentTheme, toggleTheme, isDark } = useTheme();

  return (
    <div className="theme-toggle-container">
      <h3 className="theme-toggle-title">Theme Switcher</h3>
      <p className="theme-toggle-status">
        Current theme: {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </p>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Switch to {isDark ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
