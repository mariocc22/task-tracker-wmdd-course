// components
import Task from "./Task";

const Tasks = ({
  tasks,
  onDelete,
  setReminder,
  setStatus,
  setIsOpen,
  setTaskEdit,
}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          setReminder={setReminder}
          setStatus={setStatus}
          setIsOpen={setIsOpen}
          setTaskEdit={setTaskEdit}
        />
      ))}
    </>
  );
};

export default Tasks;
