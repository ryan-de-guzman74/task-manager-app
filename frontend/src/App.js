import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [editingTask, setEditingTask] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setEditingTask(null);
    setRefresh(prev => !prev);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Task Manager</h1>
        <p className="app-subtitle">Organize your tasks efficiently</p>
      </header>
      
      <main className="app-main">
        <div className="container">
          <TaskForm editingTask={editingTask} onSave={handleSave} />
          <TaskList onEdit={setEditingTask} key={refresh} />
        </div>
      </main>
    </div>
  );
}

export default App;
