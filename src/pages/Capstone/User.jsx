import React from 'react'
import PageContent from '../../components/Capstone/PageContent'
import { NavLink } from 'react-router-dom'

const User = () => {
  return (
    <div>
      <PageContent>
        <div className='my-20'>
          <h1 className='capstone-h1 text-center'>The User</h1>
        </div>
        
        <div className='mb-15'>
          <h2 className='capstone-h2'>What is this?</h2>
            <p className='mt-4'>
              This project was created to showcase my ability to design and implement complex game systems from the ground up, 
              while building a genuinely enjoyable experience around them. 
            </p>
            <p className='mt-4'>
              The goal was not just to demonstrate technical proficiency, 
              but to show how well-crafted systems when thoughtfully combined can create meaningful, engaging gameplay. 
              From combat and progression to character building, every system was designed with both depth and accessibility in mind.
            </p>
        </div>

        <div className='mb-15'>
          <h2 className='capstone-h2'>Who is this for?</h2>
            <p className='mt-4'>
              If you're a <strong>player</strong>, you would be able to explore a rich, fantastical world filled with enemies
              battle and systems to master. From abilities and affinities to leveling and character advancements.
              You'll also get to:
            </p>
            <ul className='list-disc list-inside ml-5'>
              <li className='my-3'>Discover a diverse cast of characters, each with their own backstory</li>
              <li className='my-3'>Guide them down unique paths and shape their life story</li>
            </ul>
            <p className='mt-4'>
              If you're a <strong>game designer</strong>, designing and tuning content is straightforward and accessible. 
              Core systems like character stats, ability values, and difficulty scaling can all be adjusted with ease. Beyond that:
            </p>
            <ul className='list-disc list-inside ml-5'>
              <li className='my-3'>Adding new characters and abilities is as simple as filling in values and selecting assets</li>
              <li className='my-3'>No complex engineering work required to expand or balance the game</li>
            </ul>
        </div>

        <div className='mb-15'>
          <h2 className='capstone-h2'>How to play the game?</h2>
            <p className='mt-4'>
              The game can be played over at itch.io with this link: 
            </p>
            <p className='mt-4'>
              "insert webgl link to itch.io"
            </p>
        </div>
      
        <NavLink to="../" className="flex underline justify-center mt-20">
          Go back to Capstone Landing
        </NavLink>
      </PageContent>
    </div>
  )
}

export default User