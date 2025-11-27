import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;
    const newTask = { id: Date.now(), text: task };
    setTasks([...tasks, newTask]);
    setTask("");
  }

  function deleteTask(id) {
    const updated = tasks.filter((item) => item.id !== id);
    setTasks(updated);
  }

  return (
    <div className="div0">
      <nav className="navbar navbar-dark bg-dark">
        <div className="div1">
          <a className="navbar-brand">Todo App</a>
        </div>
      </nav>

      <div className="div2">

        <div className="div3">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        </div>

        <ul className="div4">
          {tasks.map((item) => (
            <li key={item.id} className="div5">
              <span>{item.text}</span>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;