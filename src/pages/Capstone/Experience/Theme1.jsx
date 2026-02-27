import React from 'react'
import { NavLink } from "react-router-dom"

const Theme1 = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
      Words words words theme 1
      <NavLink to="../theme2" className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80">
        Go to Theme 2
      </NavLink>
    </div>
  )
}

export default Theme1