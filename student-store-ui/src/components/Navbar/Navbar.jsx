import * as React from "react"
import Logo from "../Logo/Logo"
import "./Navbar.css"


export default function Navbar() {
  return (
    <nav className="navbar">
      {/*  Should render the Logo component that links to the / route when clicked */}
      <Logo />
      <div className="navbar-links">
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Buy Now</p>
      </div>
    </nav>
  )
}
