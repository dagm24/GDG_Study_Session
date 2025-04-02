import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    completed: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title.trim() !== "") {
      addTask(newTask);
      setNewTask({ title: "", description: "", dueDate: "", completed: false });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={newTask.title}
        onChange={handleInputChange}
        className="border p-2 w-full rounded mb-2"
        required
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={newTask.description}
        onChange={handleInputChange}
        className="border p-2 w-full rounded mb-2"
      />
      <input
        type="date"
        name="dueDate"
        value={newTask.dueDate}
        onChange={handleInputChange}
        className="border p-2 w-full rounded mb-2"
      />
      <label className="flex items-center">
        <input
          type="checkbox"
          name="completed"
          checked={newTask.completed}
          onChange={handleInputChange}
          className="mr-2"
        />
        Mark as Completed
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2 rounded">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
