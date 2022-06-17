import * as React from "react"
import contact_us_img from "../../assets/contact_us_img.svg"

export default function ContactUs() {
  return (
    <div className="contact-us">
        <div className="title">
          <h2>Contact Us</h2>
        </div>
        <div className="contact-us-desc">
            <div id="contact-us-info">
                <div className="email">
                    <span>Email:</span><span>code@path.org</span>
                </div>
                <div className="phone">
                    <span>Phone:</span><span>1-800-CODEPATH</span>
                </div>
                <div className="address">
                    <span>Address:</span><span>123 Fake Street, San Francisco, CA</span>
                </div>
                <div className="socials">
                    <span>Socials:</span><span>Logos</span>
                </div>
            </div>
            
            <div id="contact-us-img">
                <img src={contact_us_img} alt="happy person" />
            </div>
        </div>
    </div>
  )
}