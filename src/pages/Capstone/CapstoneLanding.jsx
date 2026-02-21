import { NavLink } from "react-router-dom"
import Hero from "../../components/capstone/Hero"

const CapstoneLanding = () => {
  return (
    <div>
      <Hero />
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-2xl">Game</h1>
          <p> This is my capstone landing page</p>
        </div>
        <div className="flex justify-center">
          <NavLink to="user" className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80">
            The User
          </NavLink>
          <NavLink to="experience" className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80">
            Capstone Experience
          </NavLink>
          <NavLink to="bibliography" className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80">
            Annotated Bibliography
          </NavLink>
          <NavLink to="overall" className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80">
            Overall Capstone
          </NavLink>
        </div>
    </div>
  )
}

export default CapstoneLanding