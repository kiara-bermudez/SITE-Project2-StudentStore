import * as React from "react"
import {Link} from 'react-router-dom'
import codepath_logo from "../../assets/codepath_logo.svg"
import "./Logo.css"

export default function Logo() {
  return (
    <div className="logo">
        {/* Should use the Link component from react-router-dom to link to the home route (/) when clicked*/}
        <Link to="/"><img src={codepath_logo} alt="codepath logo"/></Link>
    </div>
  )
}