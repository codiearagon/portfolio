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
import CapstoneExperienceLayout from './layouts/CapstoneExperienceLayout'
import Theme1 from './pages/Capstone/Experience/Theme1';
import Theme2 from './pages/Capstone/Experience/Theme2';
import Theme3 from './pages/Capstone/Experience/Theme3';
import Theme4 from './pages/Capstone/Experience/Theme4';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='capstone' element={<CapstoneLanding />}/>
      <Route path='capstone' element={<CapstoneLayout />}>
          <Route path='user' element={<User/>}/>
          <Route path='experience' element={<CapstoneExperienceLayout/>}>
            <Route index element={<CapstoneExperience/>}/>
            <Route path='theme1' element={<Theme1/>}/>
            <Route path='theme2' element={<Theme2/>}/>
            <Route path='theme3' element={<Theme3/>}/>
            <Route path='theme4' element={<Theme4/>}/>
          </Route>
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