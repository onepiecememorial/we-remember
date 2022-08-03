import { FC } from "react"
import { Outlet } from "react-router"
import Nav from "../Common/Nav/Nav"

const Layout:FC = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
    </>
  )
}

export default Layout
