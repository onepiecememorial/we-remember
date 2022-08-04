import { FC } from "react"
import { Outlet } from "react-router"
import DeployedBanner from "../Common/DeployedBanner/DeployedBanner"
import Nav from "../Common/Nav/Nav"
import { IN_PRODUCTION } from "../frontend.config"


const Layout:FC = () => {
  return (
    <>
      {
        (IN_PRODUCTION)
            ? <DeployedBanner/>
            : null
      }
        <Nav/>
        <Outlet/>
    </>
  )
}

export default Layout
