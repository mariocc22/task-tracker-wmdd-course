// react router
import { NavLink } from "react-router-dom";

// styles
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023</p>
      <div className="footerLinksContainer">
        <NavLink className="footerLinks" to="/about">
          About
        </NavLink>
        <NavLink className="footerLinks" to="/completed">
          Completed Tasks
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
