import React from "react";
import TaskCard from "./TaskCard";
import AssignmentIcon from "@mui/icons-material/Assignment";

const TaskList = ({ tasks, onEdit, onDelete, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-google-blue"></div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12 text-center">
        <AssignmentIcon
          className="text-gray-300 mx-auto mb-4"
          style={{ fontSize: 80 }}
        />
        <h3 className="text-xl font-medium text-gray-600 mb-2">No tasks yet</h3>
        <p className="text-gray-400">Create your first task to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium text-gray-800 mb-4">
        Your Tasks
        <span className="ml-3 text-base text-gray-400 font-normal">
          ({tasks.length} {tasks.length === 1 ? "task" : "tasks"})
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
