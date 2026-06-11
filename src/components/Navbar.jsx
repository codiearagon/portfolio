import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-51 w-full flex justify-between items-center bg-bg border-b border-red-deep  p-6">
      <NavLink
        to="/"
        className="text-white text-3xl font-mono font-bold hover:text-red"
      >
        Codie's Portfolio
      </NavLink>
      <div className="">
        <NavItem to="/capstone">Capstone</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/aboutme">About Me</NavItem>
      </div>
    </div>
  );
};

export default Navbar;
