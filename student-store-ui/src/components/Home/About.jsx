import * as React from "react"
import giant_codepath_logo from "../../assets/giant_codepath_logo.svg"

export default function About() {
  return (
    <div className="about">
        <div className="title">
          <h2>About</h2>
        </div>
        <div className="about-desc">
          <div id="about-text">
            <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
            <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
            <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
          </div>
          <div id="about-img">
            <img src={giant_codepath_logo} alt="codepath logo" />
          </div>
        </div>
      </div>
  )
}