import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-red-300 p-6">
        <NavLink to="/" className="text-3xl font-mono font-bold">
          Codie's Portfolio
        </NavLink>
      <div className="">
        <NavLink to="/capstone" className="nav-link">
          Capstone
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/aboutme" className="nav-link">
          About Me
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar