import Header from "./components/Home/Header";
import Tasks from "./components/Home/Tasks";
import AddTask from "./components/Home/AddTask";
import Footer from "./components/Home/Footer";
import About from "./components/About/About";
import Filter from "./components/Home/Filter";
import Completed from "./components/Completed/Completed";
import EditTask from "./components/Modal/EditTask";
import Modal from "./components/Modal/Modal";

// react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// hooks
import { useState, useEffect } from "react";
import useFetching from "./hooks/useFetching";

function App() {
  const {
    tasks,
    fetchTasks,
    addTask,
    editTask,
    deleteTask,
    setReminder,
    changeStatus,
    filteredTasks,
    completedTasks,
    setTasks,
    setFilters,
  } = useFetching();
  const [showAddTask, setShowAddTask] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [taskEdit, setTaskEdit] = useState("");

  // retrieve tasks form db
  useEffect(() => {
    const getTasks = async () => {
      const tasksServer = await fetchTasks();
      setTasks(tasksServer);
    };
    getTasks();
  }, []);

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
                  <h3 style={{ textAlign: "center" }}>No tasks to show</h3>
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
