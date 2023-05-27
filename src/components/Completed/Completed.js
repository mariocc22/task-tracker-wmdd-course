import React from "react";

// react router
import { Link } from "react-router-dom";

// components
import CompletedTasks from "./CompletedTasks";

const Completed = ({ completedTasks, deleteTask, setStatus }) => {
  return (
    <>
      <CompletedTasks
        tasks={completedTasks}
        deleteTask={deleteTask}
        setStatus={setStatus}
      />
      <Link to="/">Go Back</Link>
    </>
  );
};

export default Completed;
