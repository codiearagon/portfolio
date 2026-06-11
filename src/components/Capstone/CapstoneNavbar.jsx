import { NavLink } from "react-router-dom";
import NavItem from "../NavItem";

const CapstoneNavbar = () => {
  return (
    <div className="sticky top-21 w-full z-50 flex justify-center items-center bg-bg-secondary border-b border-red-dark p-3">
      <NavItem to="user">For Players</NavItem>
      <NavItem to="experience">Development Process</NavItem>
      <NavItem to="bibliography">Annotated Bibliography</NavItem>
      <NavItem to="overall">Personal Reflections</NavItem>
    </div>
  );
};

export default CapstoneNavbar;
