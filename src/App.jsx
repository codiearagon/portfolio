import { Route, createHashRouter, createRoutesFromElements, RouterProvider, Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CapstoneLanding from "./pages/Capstone/CapstoneLanding"
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/capstone' element={<CapstoneLanding />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/aboutme' element={<AboutMe />} />
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