import { FC } from "react"
import { Outlet } from "react-router"


const Layout:FC = () => {
  return (
    <div>
        Nav
        <Outlet/>
    </div>
  )
}

export default Layout
