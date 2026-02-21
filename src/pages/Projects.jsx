import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div className='flex justify-center m-10'>
      <div className="grid gap-20 grid-cols-3">
        <ProjectCard title="Game" subtitle="Capstone Project"/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default Projects