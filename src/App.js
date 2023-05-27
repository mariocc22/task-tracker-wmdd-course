import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Filter from "./components/Filter";
import Completed from "./components/Completed/Completed";
import EditTask from "./components/Modal/EditTask";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// hooks
import { useState, useEffect } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [taskEdit, setTaskEdit] = useState("");

  useEffect(() => {
    const getTasks = async () => {
      const tasksServer = await fetchTasks();
      setTasks(tasksServer);
    };
    getTasks();
  }, []);

  // filter products
  const filterTasks = (tasks) => {
    return tasks.filter((task) => {
      return filters === "all" || task.status === filters;
    });
  };

  const filteredTasks = filterTasks(tasks);

  // completed tasks
  const completeTasks = (tasks) => {
    return tasks.filter((task) => {
      return task.status === "completed";
    });
  };

  const completedTasks = completeTasks(tasks);

  // fetch tasks
  async function fetchTasks() {
    const data = await fetch("http://localhost:5000/tasks");
    const res = await data.json();
    return res;
  }

  // fetch task
  async function fetchTask(id) {
    const data = await fetch(`http://localhost:5000/tasks/${id}`);
    const res = await data.json();
    return res;
  }

  // add task
  const addTask = async ({ text, day, reminder, status }) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text, day, reminder, status }),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  // edit task
  const editTask = async ({ id, text, day }) => {
    console.log(id);
    const idTask = await fetchTask(id);
    const upTask = { ...idTask, text: text, day: day };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(upTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: data.text, day: data.day } : task
      )
    );
  };

  // delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(() => tasks.filter((task) => task.id !== id));
  };

  // change reminder
  const setReminder = async (id) => {
    const toggleTask = await fetchTask(id);
    const upTask = { ...toggleTask, reminder: !toggleTask.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(upTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // change status
  const changeStatus = async (id) => {
    const toggleTask = await fetchTask(id);
    const newStatus = toggleTask.status === "active" ? "completed" : "active";
    const upTask = { ...toggleTask, status: newStatus };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(upTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          setShowAddTask={setShowAddTask}
          showAddTask={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {showAddTask && <AddTask addTask={addTask} />}
                {tasks.length > 0 ? (
                  <>
                    <Filter changeFilters={setFilters} />
                    <Tasks
                      tasks={filteredTasks}
                      onDelete={deleteTask}
                      setStatus={changeStatus}
                      setReminder={setReminder}
                      setIsOpen={setIsOpen}
                      setTaskEdit={setTaskEdit}
                    />
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                      <EditTask
                        id={taskEdit}
                        editTask={editTask}
                        setIsOpen={setIsOpen}
                      />
                    </Modal>
                  </>
                ) : (
                  "No tasks to show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/completed"
            element={
              <Completed
                completedTasks={completedTasks}
                deleteTask={deleteTask}
                setStatus={changeStatus}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
