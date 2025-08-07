import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsError(false);

    if (!inputValues.email || !inputValues.password) {
      setError("Please fill in all fields.");
      setIsError(true);
      return;
    }
    if (!isFormValid("email", inputValues.email)) {
      setError("Invalid email format.");
      setIsError(true);
      return;
    }
    if (!isFormValid("password", inputValues.password)) {
      setError("Invalid password format.");
      setIsError(true);
      return;
    }

    console.log("Form submitted successfully:", inputValues);
    setError("");
    setIsError(false);
    alert("Login successful!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });

    if (isError) {
      setError("");
      setIsError(false);
    }
  };

  const isFormValid = (type, value) => {
    if (type === "email") {
      return value.includes("@") && value.includes(".");
    }
    if (type === "password") {
      return value.length >= 6;
    }
  };

  const isEntireFormValid = () => {
    return (
      inputValues.email &&
      inputValues.password &&
      isFormValid("email", inputValues.email) &&
      isFormValid("password", inputValues.password)
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
        >
          Submit
        </button>
      </form>
      {isError && (
        <div className="form-status">
          <p>Form Status: Invalid</p>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
