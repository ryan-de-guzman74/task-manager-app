import React, { useState, useEffect } from "react";
import api from "../api";

function TaskForm({ editingTask, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || "");
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskData = { title, description };
      if (editingTask) {
        await api.put(`/tasks/${editingTask.id}/`, taskData);
      } else {
        await api.post("/tasks/", taskData);
      }
      setTitle("");
      setDescription("");
      setError(null);
      onSave();
    } catch {
      setError("Failed to save task. Please try again.");
    }
  };

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2 className="form-title">
            {editingTask ? "Edit Task" : "Add New Task"}
          </h2>
        </div>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="task-title" className="form-label">
            Task Title
          </label>
          <input
            id="task-title"
            type="text"
            className="form-input"
            placeholder="Enter task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="task-description" className="form-label">
            Description (Optional)
          </label>
          <textarea
            id="task-description"
            className="form-textarea"
            placeholder="Enter task description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingTask ? "Update Task" : "Add Task"}
          </button>
          {editingTask && (
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => {
                setTitle("");
                setDescription("");
                setError(null);
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
