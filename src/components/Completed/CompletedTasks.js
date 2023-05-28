// components
import CompletedTask from "./CompletedTask";

const CompletedTasks = ({ tasks, deleteTask, setStatus }) => {
  return (
    <>
      {!tasks.length ? (
        <h3 style={{ margin: "1rem", textAlign: "center" }}>
          You haven't completed any task!{" "}
        </h3>
      ) : (
        tasks.map((task) => (
          <CompletedTask
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            setStatus={setStatus}
          />
        ))
      )}
    </>
  );
};

export default CompletedTasks;
