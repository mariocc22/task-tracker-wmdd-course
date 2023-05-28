import React from "react";

// react router
import { NavLink } from "react-router-dom";

// components
import CompletedTasks from "./CompletedTasks";

// styles
import "./Completed.css";

const Completed = ({ completedTasks, deleteTask, setStatus }) => {
  return (
    <div className="container-completed">
      <NavLink className="backLink" to="/">
        Go Back
      </NavLink>
      <CompletedTasks
        tasks={completedTasks}
        deleteTask={deleteTask}
        setStatus={setStatus}
      />
    </div>
  );
};

export default Completed;
