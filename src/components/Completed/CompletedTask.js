import React from "react";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbReload } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";

const CompletedTask = ({ task, deleteTask, setStatus }) => {
  return (
    <div className={`task`}>
      <h3>
        {task.text}
        <BsFillCheckCircleFill style={{ color: "green" }} />
        <TbReload
          style={{ color: "red", marginLeft: "auto" }}
          onClick={() => setStatus(task.id)}
        />
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default CompletedTask;
