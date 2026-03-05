import React from 'react'
import Theme from '../../../components/Capstone/Theme'
import PageContent from '../../../components/Capstone/PageContent'

const Theme1 = () => {
  return (
    <Theme nextThemePath="../theme2">
      <PageContent>
        <div className='my-20'>
          <h1 className='capstone-h1 text-center'>Unity UI Toolkit</h1>
        </div>

        <div className='mb-15'>
          <h2 className='capstone-h2'>What is this?</h2>
            <p className='mt-4'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p className='mt-4'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
        </div>
      </PageContent>
    </Theme>
  )
}

export default Theme1