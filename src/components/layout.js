import React from "react"
import Footer from "./footer"
import "../styles/style.scss"
import NavBar from "./navbar"




const Layout = props => {
  return (
    <div>
      <NavBar mode={props.mode}></NavBar>
      {props.children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
