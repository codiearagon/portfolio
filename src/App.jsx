import { Route, createHashRouter, createRoutesFromElements, RouterProvider, Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CapstoneLanding from "./pages/Capstone/CapstoneLanding"

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/capstone' element={<CapstoneLanding />} />
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