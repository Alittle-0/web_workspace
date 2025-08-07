import React from "react";
import HelloWorld from "./component/HelloWorld";
import GreetingCard from "./component/GreetingCard";
import Counter from "./component/Counter";
import ToggleVisibility from "./component/ToggleVisibility";
import TodoList from "./component/TodoList";
import FilterableTodoList from "./component/FilterableTodoList";
import Timer from "./component/Timer";
import UserProfile from "./component/UserProfile";
import LoginForm from "./component/LoginForm";
import { ThemeProvider } from "./component/ThemeContext";
import ThemeToggle from "./component/ThemeToggle";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        
        <div className="helloWorld">
          <HelloWorld />
        </div>
        <br />
        <p>------------------------------</p>
        <br />
        <h1>GreetingCard</h1>
        <div className="greetingCard">
          <GreetingCard name="Teacher Khiem" />
          <GreetingCard name="Phi Hung" />
        </div>
        <br />
        <p>------------------------------</p>
        <br />
        <h1>Counter</h1>
        <div className="counter-container">
          <Counter />
        </div>
        <br />
        <p>------------------------------</p>
        <br />
        <h1>ToggleVisibility</h1>
        <div className="toggle-container">
          <ToggleVisibility />
        </div>
        <br />
        <p>------------------------------</p>
        <br />
        <h1>TodoList</h1>
        <div className="todo-container">
          <TodoList />
        </div>
        <br />
        <p>------------------------------</p>
        <br />
        <h1>FilterableTodoList</h1>
        <div className="filterable-todo-container">
          <FilterableTodoList />
        </div>
        <br />
        <p>------------------------------</p>
        <br />
        <h1>Timer</h1>
        <div className="timer-container">
          <Timer />
        </div>
        <br />
        <p>------------------------------</p>
        <br />
        <h1>User Profile</h1>
        <div className="user-profile-container">
          <UserProfile />
        </div>
        <br />
        <p>------------------------------</p>
        <br />
        <h1>Login Form</h1>
        <div className="login-form-container">
          <LoginForm />
        </div>
        <br />
        <p>------------------------------</p>
        <br />
      </div>
    </ThemeProvider>
  );
}

export default App;