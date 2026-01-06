import React from "react";

const TaskCard = ({ task, index }) => {
  let isEditing = false;
  return (
    <Card className = "p-4 bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-shadow duration-200 animate-fade-in group">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={task.status === "completed"}
            onChange={() => {}}
            className="size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span
            className={`text-sm font-medium ${
              task.status === "completed" ? "line-through text-muted-foreground" : "text-foreground"
            }`}
          >
            {task.title}
          </span>
        </div>
        <button
          onClick={() => {}}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          Edit
        </button>
      </div>
    </Card>
  );
};

export default TaskCard;
