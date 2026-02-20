import { Outlet } from "react-router-dom"
import CapstoneNavbar from "../components/capstone/CapstoneNavbar"

const CapstoneLayout = () => {
  return (
    <>
      <CapstoneNavbar/>
      <Outlet/>
    </>
  )
}

export default CapstoneLayout