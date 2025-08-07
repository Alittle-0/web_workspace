import React from "react";
import { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Learn React",
      status: "pending",
    },
    {
      id: 2,
      task: "Build a todo app",
      status: "completed",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        task: inputValue,
        status: "pending",
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const removeTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (task.status !== "completed") {
      alert("Only completed tasks can be removed.");
      return;
    }
    setTasks(tasks.filter((task) => task.id !== id));
    alert("Task removed successfully.");
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      )
    );
  };

  return (
    <div className="todo">
      <h2>Todo List</h2>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new task..."
          className="task-input"
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>

      <div className="tasks-list">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task-item ${task.status}`}
            >
              <span className="task-text">{task.task}</span>
              <span className="task-status" onClick={() => toggleTaskStatus(task.id)}>{task.status}</span>
              <span className="task-remove" onClick={() => removeTask(task.id)}>Remove</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default TodoList;
