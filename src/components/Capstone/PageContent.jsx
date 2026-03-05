import React from 'react'

const PageContent = ({children}) => {
  return (
    <div className='px-16 max-w-4xl mx-auto my-8'>
      {children}
    </div>
  )
}

export default PageContent