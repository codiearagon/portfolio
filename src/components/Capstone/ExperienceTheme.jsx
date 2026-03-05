import React from 'react'
import { NavLink } from 'react-router-dom'

const ExperienceTheme = ({children, heading, linkTo, linkToLabel = "Read more"}) => {
  return (
    <div className='flex flex-col items-start bg-gray-200 w-xl h-50 p-5 rounded-xl'>
      <div>
        <h2 className='capstone-h2'>{heading}</h2>
        <p className='mt-2'>{children}</p>
      </div>
      
      <NavLink to={linkTo} className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80 self-end mt-auto">
        {linkToLabel}
      </NavLink>
    </div>
  )
}

export default ExperienceTheme