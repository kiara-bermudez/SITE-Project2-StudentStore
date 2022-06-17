import * as React from "react"

export default function Footer() {
  return (
    <div className="footer">
        <div className="links">
            <div className="column">
                <h3>Categories</h3>
                <ul>
                    <li>All Categories</li>
                    <li>Clothing</li>
                    <li>Food</li>
                    <li>Accessories</li>
                    <li>Tech</li>
                </ul>
            </div>
            <div className="column">
                <h3>Company</h3>
                <ul><li>About Us</li><li>Find a Store</li><li>Terms</li><li>Sitemap</li><li>Careers</li></ul>
            </div>
            <div className="column">
                <h3>Support</h3>
                <ul><li>Contact Us</li><li>Money Refund</li><li>Order Status</li><li>Shipping Info</li><li>Open Dispute</li></ul>
            </div>
            <div className="column">
                <h3>Account</h3>
                <ul><li>Login</li><li>Register</li><li>Account Setting</li><li>My Orders</li></ul>
            </div>
            <div className="column">
                <h3>Socials</h3>
                <ul><li>Facebook</li><li>Twitter</li><li>LinkedIn</li><li>Instagram</li><li>YouTube</li></ul>
            </div>
            <div className="column">
                <h3>Our App</h3>

            </div>
        </div>
        <div className="payment-logos">

        </div>
    </div>
  )
}

