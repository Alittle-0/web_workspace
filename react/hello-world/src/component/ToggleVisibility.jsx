import React from "react";
import { useState } from "react";
import "./ToggleVisibility.css";

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-container">
      <button className="toggle_button" 
      onClick={handleToggle}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      {isVisible && (
        <p className="content">
          This is the content that can be toggled. 
          Click the button again to
          hide it.
        </p>
      )}
    </div>
  );
}

export default ToggleVisibility;
