import React from 'react'
import { NavLink } from 'react-router-dom'

const Theme = ({children, prevThemePath, prevThemeLabel = "Previous Theme", nextThemePath, nextThemeLabel = "Next Theme"}) => {
  return (
    <div>
      <div className=''>
        {children}
      </div>
      <div className='flex gap-4 justify-between mx-50'>
        <div>
          {prevThemePath && (
          <NavLink to={prevThemePath} className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80">
            {prevThemeLabel}
          </NavLink>
          )}
        </div>
        
        <div>
          {nextThemePath && (
            <NavLink to={nextThemePath} className="bg-red-400 text-white capstone-nav-link shadow-lg hover:bg-red-400/80">
              {nextThemeLabel}
            </NavLink>
          )}
        </div>
      </div>
      <NavLink to="../../" className="flex underline justify-center mt-20">
        Go back to Capstone Landing
      </NavLink>
    </div>
  )
}

export default Theme