import * as React from "react"
import hero_image from "../../assets/hero_image.svg"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
        <div className="intro">
            <h1> Welcome! </h1>
            <h1> Find Your Merch!</h1>
            <p> We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
        </div>
        
        <div className="hero-img">
            <img className="hero-img" src={hero_image} alt="hero image" />
        </div>
        
    </div>
  )
}