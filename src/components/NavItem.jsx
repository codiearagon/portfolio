import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition-colors duration-350 mx-4 px-2 py-2 ${isActive ? "text-red border-b-2 border-red-dark" : "hover:text-red"}`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
