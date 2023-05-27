import { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, setReminder, setStatus }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          setReminder={setReminder}
          setStatus={setStatus}
        />
      ))}
    </>
  );
};

export default Tasks;
