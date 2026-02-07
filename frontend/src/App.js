import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import { taskAPI } from "./services/api";
import ChecklistIcon from "@mui/icons-material/Checklist";
import RefreshIcon from "@mui/icons-material/Refresh";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await taskAPI.getAllTasks();
      setTasks(response.data || []);
    } catch (err) {
      setError(
        "Failed to fetch tasks. Please make sure the backend server is running.",
      );
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Filter tasks
  useEffect(() => {
    if (filter === "all") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === filter));
    }
  }, [tasks, filter]);

  // Show success message
  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Create task
  const handleCreateTask = async (taskData) => {
    try {
      await taskAPI.createTask(taskData);
      await fetchTasks();
      showSuccessMessage("Task created successfully!");
    } catch (err) {
      setError("Failed to create task. " + (err.message || ""));
      console.error("Error creating task:", err);
    }
  };

  // Update task
  const handleUpdateTask = async (taskData) => {
    try {
      await taskAPI.updateTask(editingTask._id, taskData);
      await fetchTasks();
      setEditingTask(null);
      showSuccessMessage("Task updated successfully!");
    } catch (err) {
      setError("Failed to update task. " + (err.message || ""));
      console.error("Error updating task:", err);
    }
  };

  // Delete task
  const handleDeleteTask = async (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await taskAPI.deleteTask(taskId);
        await fetchTasks();
        showSuccessMessage("Task deleted successfully!");
      } catch (err) {
        setError("Failed to delete task. " + (err.message || ""));
        console.error("Error deleting task:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ChecklistIcon
                className="text-google-blue"
                style={{ fontSize: 40 }}
              />
              <div>
                <h1 className="text-3xl font-medium text-gray-800">
                  Task Manager
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Organize your work efficiently
                </p>
              </div>
            </div>
            <button
              onClick={fetchTasks}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-google-blue hover:bg-gray-50 rounded-lg transition-colors"
              title="Refresh tasks"
            >
              <RefreshIcon />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg shadow-sm animate-fade-in">
            {successMessage}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <span>{error}</span>
              <button
                onClick={() => setError(null)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Task Form */}
        <TaskForm
          task={editingTask}
          onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
          onCancel={() => setEditingTask(null)}
        />

        {/* Filter Bar */}
        <FilterBar currentFilter={filter} onFilterChange={setFilter} />

        {/* Task List */}
        <TaskList
          tasks={filteredTasks}
          onEdit={setEditingTask}
          onDelete={handleDeleteTask}
          loading={loading}
        />
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-gray-400 text-sm">
        <p>Task Management Application © 2026</p>
      </footer>
    </div>
  );
}

export default App;
