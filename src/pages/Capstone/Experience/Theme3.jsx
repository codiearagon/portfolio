import React from 'react'
import { NavLink } from "react-router-dom"

const Theme3 = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
      Words words words theme 3
      <NavLink to="../theme4" className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80">
        Go to Theme 4
      </NavLink>
    </div>
  )
}

export default Theme3