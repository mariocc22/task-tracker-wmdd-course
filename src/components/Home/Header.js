// props
import PropTypes from "prop-types";

// components
import Button from "./Button";

// hooks
import { useLocation } from "react-router-dom";

const Header = ({ title, setShowAddTask, showAddTask }) => {
  const location = useLocation();
  const onClick = (e) => {
    setShowAddTask((prev) => !prev);
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={`${showAddTask ? "red" : "green"}`}
          text={`${showAddTask ? "Close" : "Add"}`}
          onClick={onClick}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
