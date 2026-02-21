import { NavLink } from "react-router-dom"
import placeholder from "../assets/images/jackfrost.jpg"

const ProjectCard = ({path = '.', img = placeholder, title = 'test title', subtitle = 'test subtitle'}) => {
  return (
    <NavLink to={path} className='flex-col text-center bg-gray-100 border-2 border-gray-500 rounded-xl p-6 hover:shadow-xl'>
      <img src={img} className="max-w-64 max-h-64 rounded-full shadow-lg mb-4"></img>
      <p className="text-xl font-bold mb-1">{title}</p>
      <p className="text-md">{subtitle}</p>
    </NavLink>
  )
}

export default ProjectCard