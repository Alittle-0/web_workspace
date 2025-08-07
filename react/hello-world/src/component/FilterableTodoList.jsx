import React from "react";
import { useState, useEffect } from "react";
import "./TodoList.css";

function FilterableTodoList() {
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
  const [searchValue, setSearchValue] = useState("");
  const [foundTask, setFoundTask] = useState([]);

  useEffect(() => {
    if (searchValue.trim() !== "") {
      const filteredTasks = tasks.filter((task) =>
        task.task.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFoundTask(filteredTasks);
    } else {
      setFoundTask([]);
    }
  }, [tasks, searchValue]);

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
    if (task && task.status !== "completed") {
      alert("Only completed tasks can be removed.");
      return;
    }
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
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
    <div className="todo-container">
      <h2>Filterable Todo List</h2>
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

      <div className="input-section">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search tasks..."
          className="task-input"
        />
      </div>

      <div className="tasks-list">
        {searchValue.trim() !== "" ? (
          foundTask.length > 0 ? (
            foundTask.map((task) => (
              <div key={task.id} className={`task-item ${task.status}`}>
                <span className="task-text">{task.task}</span>
                <span
                  className="task-status"
                  onClick={() => toggleTaskStatus(task.id)}
                >
                  {task.status}
                </span>
                <span
                  className="task-remove"
                  onClick={() => removeTask(task.id)}
                >
                  Remove
                </span>
              </div>
            ))
          ) : (
            <div className="no-tasks">
              No tasks found matching "{searchValue}"
            </div>
          )
        ) : (
          tasks.map((task) => (
            <div key={task.id} className={`task-item ${task.status}`}>
              <span className="task-text">{task.task}</span>
              <span
                className="task-status"
                onClick={() => toggleTaskStatus(task.id)}
              >
                {task.status}
              </span>
              <span className="task-remove" onClick={() => removeTask(task.id)}>
                Remove
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FilterableTodoList;
