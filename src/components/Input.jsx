import React from "react";

const Input = ({ textarea, label, ...props }) => {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <div className="flex flex-col gap-1 my-4">
      <label htmlFor="" className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className={classes} />
      ) : (
        <input {...props} className={classes} />
      )}
    </div>
  );
};

export default Input;
