import React from 'react'
import { NavLink, Outlet } from "react-router-dom"

const CapstoneExperience = () => {
  return (
    <div>
      Some words for capstone experience
      <div className='flex flex-col justify-center items-center mt-10 gap-10'>
        <div>
          Words words words
          <NavLink to="theme1" className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80">
            Theme 1
          </NavLink>
        </div>
        <div>
          Words words words
          <NavLink to="theme2" className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80">
            Theme 2
          </NavLink>
        </div>
        <div>
          Words words words
          <NavLink to="theme3" className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80">
            Theme 3
          </NavLink>
        </div>
        <div>
          Words words words
          <NavLink to="theme4" className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80">
            Theme 4
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default CapstoneExperience