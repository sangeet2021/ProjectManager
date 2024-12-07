import React, { useState } from "react";

const NewTask = ({onAdd}) => {
  const [tasks, setTasks] = useState("");

  const handleChange = (e) => {
    setTasks(e.target.value);
  };

  const handleClick = () => {
    onAdd(tasks);
    setTasks('');
  };
  return (
    <div className="flex items-center gap-4">
      <input
        value={tasks}
        onChange={handleChange}
        type="text"
        className="w-64 py-1 px-2 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
