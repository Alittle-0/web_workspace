import React from "react";

function HelloWorld() {
  const headingStyle = {
    textAlign: "center",
    color: "blue",
  };

  return (
    <div className="HelloWorld">
      <h1 style={headingStyle}>Hello, React World!</h1>
    </div>
  );
}

export default HelloWorld;
