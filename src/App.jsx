import { Route, createHashRouter, createRoutesFromElements, RouterProvider, Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"
import CapstoneLayout from './layouts/CapstoneLayout';
import CapstoneLanding from "./pages/capstone/CapstoneLanding"
import CapstoneExperience from './pages/capstone/CapstoneExperience'
import User from './pages/capstone/User'
import Bibliography from './pages/capstone/Bibliography'
import OverallCapstone from './pages/capstone/OverallCapstone'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='capstone' element={<CapstoneLanding />}/>
      <Route path='capstone' element={<CapstoneLayout />}>
          <Route path='user' element={<User/>}/>
          <Route path='experience' element={<CapstoneExperience/>}/>
          <Route path='bibliography' element={<Bibliography/>}/>
          <Route path='overall' element={<OverallCapstone/>}/>
        </Route>
      <Route path='projects' element={<Projects />} />
      <Route path='aboutme' element={<AboutMe />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App