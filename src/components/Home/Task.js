// icons
import { FaTimes, FaEdit } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Task = ({
  task,
  onDelete,
  setReminder,
  setStatus,
  setIsOpen,
  setTaskEdit,
}) => {
  const handleEdit = () => {
    setIsOpen(true);
    setTaskEdit(task.id);
  };

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => setReminder(task.id)}
    >
      <h3>
        {task.text}{" "}
        {task.status === "completed" ? (
          <BsFillCheckCircleFill
            style={{ color: "green", transform: "scale(1.5)" }}
          />
        ) : (
          <>
            <FaEdit
              style={{ color: "red", cursor: "pointer", marginLeft: "auto" }}
              onClick={handleEdit}
            />
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            />
          </>
        )}
      </h3>
      <p>{task.day}</p>
      <select value={task.status} onChange={() => setStatus(task.id)}>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default Task;
