import React, { useEffect, useState } from "react";
import api from "../api";
import ConfirmDialog from "./ConfirmDialog";

function TaskList({ onEdit }) {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('created_at');
    const [searchTerm, setSearchTerm] = useState('');
    const [deleteDialog, setDeleteDialog] = useState({ isOpen: false, task: null });

    useEffect(() => {
        fetchTasks();
    }, []);

    // Filter and sort tasks
    useEffect(() => {
        let filtered = tasks.filter(task => {
            const matchesFilter = filter === 'all' || 
                (filter === 'completed' && task.completed) || 
                (filter === 'pending' && !task.completed);
            
            const matchesSearch = !searchTerm || 
                task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase()));
            
            return matchesFilter && matchesSearch;
        });

        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'title':
                    return a.title.localeCompare(b.title);
                case 'completed':
                    return a.completed - b.completed;
                default:
                    return new Date(b.created_at) - new Date(a.created_at);
            }
        });

        setFilteredTasks(filtered);
    }, [tasks, filter, sortBy, searchTerm]);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await api.get("/tasks/");
            setTasks(res.data);
        } catch (err) {
            setError("Failed to load tasks. Please check if the backend is running.");
        } finally {
            setLoading(false);
        }
    };

    const toggleComplete = async (id) => {
        try {
            await api.patch(`/tasks/${id}/`);
            fetchTasks();
        } catch {
            setError("Failed to toggle task status.");
        }
    };

    const handleDeleteClick = (task) => {
        setDeleteDialog({ isOpen: true, task });
    };

    const confirmDelete = async () => {
        try {
            await api.delete(`/tasks/${deleteDialog.task.id}/`);
            fetchTasks();
            setDeleteDialog({ isOpen: false, task: null });
        } catch {
            setError("Failed to delete task.");
            setDeleteDialog({ isOpen: false, task: null });
        }
    };

    const cancelDelete = () => {
        setDeleteDialog({ isOpen: false, task: null });
    };

    const handleSort = (field) => {
        setSortBy(field);
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p className="loading-text">Loading tasks...</p>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="error-container">
                <p className="error-text">{error}</p>
                <button className="btn btn-primary" onClick={fetchTasks}>
                    Try Again
                </button>
            </div>
        );
    }
    
    return (
        <div className="task-list-container">
            <div className="task-list-header">
                <h2 className="task-list-title">Your Tasks</h2>
                <div className="task-count">
                    {filteredTasks.length} of {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
                </div>
            </div>

            {/* Search and Filter Controls */}
            <div className="task-controls">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search tasks..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                
                <div className="filter-controls">
                    <select 
                        className="filter-select"
                        value={filter} 
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">All Tasks</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </div>
            
            {tasks.length === 0 ? (
                <div className="empty-state">
                    <h3 className="empty-title">No tasks yet</h3>
                    <p className="empty-description">
                        Create your first task using the form above
                    </p>
                </div>
            ) : filteredTasks.length === 0 ? (
                <div className="empty-state">
                    <h3 className="empty-title">No tasks found</h3>
                    <p className="empty-description">
                        Try adjusting your search or filter criteria
                    </p>
                </div>
            ) : (
                <div className="task-table-container">
                    <table className="task-table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th className="sortable-header" onClick={() => handleSort('title')}>
                                    Title
                                    {sortBy === 'title' && <span className="sort-indicator">▼</span>}
                                </th>
                                <th className="sortable-header" onClick={() => handleSort('description')}>
                                    Description
                                    {sortBy === 'description' && <span className="sort-indicator">▼</span>}
                                </th>
                                <th className="sortable-header" onClick={() => handleSort('completed')}>
                                    Status
                                    {sortBy === 'completed' && <span className="sort-indicator">▼</span>}
                                </th>
                                <th className="sortable-header" onClick={() => handleSort('created_at')}>
                                    Created Date
                                    {sortBy === 'created_at' && <span className="sort-indicator">▼</span>}
                                </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks.map((task, index) => (
                                <tr key={task.id} className={`task-row ${task.completed ? 'completed' : ''}`}>
                                    <td className="task-number-cell">
                                        <span className="task-number">{index + 1}</span>
                                    </td>
                                    <td className="task-title-cell">
                                        <span 
                                            className={`task-title ${task.completed ? 'completed' : ''}`}
                                            title={task.title}
                                        >
                                            {task.title}
                                        </span>
                                    </td>
                                    <td className="task-description-cell">
                                        <span 
                                            className={`task-description ${task.completed ? 'completed' : ''}`}
                                            title={task.description || ''}
                                        >
                                            {task.description || '-'}
                                        </span>
                                    </td>
                                    <td className="task-status-cell">
                                        {task.completed ? (
                                            <span className="status-badge completed">Completed</span>
                                        ) : (
                                            <span className="status-badge pending">Pending</span>
                                        )}
                                    </td>
                                    <td className="task-date-cell">
                                        {new Date(task.created_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </td>
                                    <td className="task-actions-cell">
                                        <div className="task-actions">
                                            <button 
                                                className={`btn btn-sm ${task.completed ? 'btn-warning' : 'btn-success'}`}
                                                onClick={() => toggleComplete(task.id)}
                                                title={task.completed ? "Mark as incomplete" : "Mark as complete"}
                                            >
                                                {task.completed ? "Undo" : "Complete"}
                                            </button>
                                            
                                            <button 
                                                className="btn btn-sm btn-info"
                                                onClick={() => onEdit(task)}
                                                title="Edit task"
                                            >
                                                Edit
                                            </button>
                                            
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleDeleteClick(task)}
                                                title="Delete task"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Confirmation Dialog */}
            <ConfirmDialog
                isOpen={deleteDialog.isOpen}
                onClose={cancelDelete}
                onConfirm={confirmDelete}
                title="Delete Task"
                message={`Are you sure you want to delete "${deleteDialog.task?.title}"? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
            />
        </div>
    );
}

export default TaskList;