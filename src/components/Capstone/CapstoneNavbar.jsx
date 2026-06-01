import { NavLink } from "react-router-dom";

const CapstoneNavbar = () => {
  return (
    <div className="sticky top-21 w-full z-50 flex justify-center items-center bg-red-400 p-3">
      <NavLink to="user" className="capstone-nav-link">
        The User
      </NavLink>
      <NavLink to="experience" className="capstone-nav-link">
        Capstone Experience
      </NavLink>
      <NavLink to="bibliography" className="capstone-nav-link">
        Annotated Bibliography
      </NavLink>
      <NavLink to="overall" className="capstone-nav-link">
        Overall Capstone
      </NavLink>
    </div>
  );
};

export default CapstoneNavbar;
