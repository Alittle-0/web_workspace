import React, { createContext, useContext, useState, useEffect } from "react";

// Create the theme context
const ThemeContext = createContext();

// Theme configurations
export const themes = {
  light: {
    name: "light",
    colors: {
      primary: "#007bff",
      secondary: "#6c757d",
      success: "#28a745",
      danger: "#dc3545",
      warning: "#ffc107",
      info: "#17a2b8",
      background: "#ffffff",
      surface: "#f8f9fa",
      text: "#212529",
      textSecondary: "#6c757d",
      border: "#dee2e6",
      shadow: "rgba(0, 0, 0, 0.1)",
    },
  },
  dark: {
    name: "dark",
    colors: {
      primary: "#0d6efd",
      secondary: "#6c757d",
      success: "#198754",
      danger: "#dc3545",
      warning: "#ffc107",
      info: "#0dcaf0",
      background: "#121212",
      surface: "#1e1e1e",
      text: "#ffffff",
      textSecondary: "#adb5bd",
      border: "#495057",
      shadow: "#ffffff",
    },
  },
};

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
    const root = document.documentElement;
    const theme = themes[currentTheme];

    root.style.setProperty("--bg-color", theme.colors.background);
    root.style.setProperty("--text-color", theme.colors.text);
    root.style.setProperty("--card-bg", theme.colors.background);
    root.style.setProperty("--border-color", theme.colors.border);
    root.style.setProperty("--button-bg", theme.colors.primary);
    root.style.setProperty("--button-text", theme.colors.buttonText);
    root.style.setProperty("--shadow", theme.colors.shadow);

    document.body.style.backgroundColor = theme.colors.background;
    document.body.style.color = theme.colors.text;
    document.body.style.transition = "all 0.3s ease";
  }, [currentTheme]);

  const contextValue = {
    currentTheme,
    theme: themes[currentTheme],
    themes,
    toggleTheme,
    isDark: currentTheme === "dark",
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default ThemeContext;
