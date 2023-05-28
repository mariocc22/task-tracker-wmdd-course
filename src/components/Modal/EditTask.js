// hooks
import { useState } from "react";

const EditTask = ({ editTask, id, setIsOpen }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add task text");
      return;
    }

    editTask({ id, text, day });
    setText("");
    setDay("");
    setIsOpen(false);
  };

  return (
    <form action="" className="edit-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          placeholder="Edit Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="date">Day & Time</label>
        <input
          type="text"
          id="date"
          placeholder="Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default EditTask;
