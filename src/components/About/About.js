// react router
import { NavLink } from "react-router-dom";

// styles
import "./About.css";

const About = () => {
  return (
    <div className="container-about">
      <h4>Version 1.0.0</h4>
      <NavLink className="backLink" to="/">
        Go Back
      </NavLink>
    </div>
  );
};

export default About;
