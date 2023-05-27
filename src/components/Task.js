// icons
import { FaTimes, FaEdit } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Task = ({ task, onDelete, setReminder, setStatus }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => setReminder(task.id)}
    >
      <h3>
        {task.text}{" "}
        {task.status === "completed" ? (
          <BsFillCheckCircleFill style={{ color: "green" }} />
        ) : (
          <>
            <FaEdit
              style={{ color: "red", cursor: "pointer", marginLeft: "auto" }}
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
