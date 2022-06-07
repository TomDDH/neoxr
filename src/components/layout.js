import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"
import NavBar from "./navbar"




const Layout = props => {
  return (
    <div>
      <NavBar></NavBar>
      {props.children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
