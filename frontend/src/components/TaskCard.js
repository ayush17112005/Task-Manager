import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import LoopIcon from "@mui/icons-material/Loop";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircleIcon className="text-google-green" />;
      case "in-progress":
        return <LoopIcon className="text-google-yellow" />;
      default:
        return <PendingIcon className="text-gray-400" />;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-50 text-green-700 border-green-200";
      case "in-progress":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-5 border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {getStatusIcon(task.status)}
          <h3 className="text-lg font-medium text-gray-800">{task.title}</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="text-gray-400 hover:text-google-blue transition-colors p-1"
            title="Edit task"
          >
            <EditIcon fontSize="small" />
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="text-gray-400 hover:text-google-red transition-colors p-1"
            title="Delete task"
          >
            <DeleteIcon fontSize="small" />
          </button>
        </div>
      </div>

      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {task.description}
      </p>

      <div className="flex items-center justify-between">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusClass(task.status)}`}
        >
          {task.status.charAt(0).toUpperCase() +
            task.status.slice(1).replace("-", " ")}
        </span>
        <span className="text-xs text-gray-400">
          {formatDate(task.createdAt)}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
