import React from "react";

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task.id}
            className="border p-4 rounded mb-2 flex justify-between items-start"
          >
            <div>
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              <p className="text-sm text-gray-500">
                Due: {task.dueDate || "No due date"}
              </p>
              <p
                className={`text-sm ${
                  task.completed ? "text-green-600" : "text-red-600"
                }`}
              >
                {task.completed ? "Completed" : "Pending"}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  updateTask(task.id, { completed: !task.completed })
                }
                className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
              >
                Toggle Status
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No tasks found.</p>
      )}
    </div>
  );
}

export default TaskList;
