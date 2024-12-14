import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
const MainLayout = () => {
  return (
    <div className="px-6 pr-8 md:px-8 lg:px-10 xl:px-32">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout