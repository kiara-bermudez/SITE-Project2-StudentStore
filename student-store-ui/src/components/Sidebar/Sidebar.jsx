import * as React from "react"
import "./Sidebar.css"

/* Props: isOpen shoppingCart products checkoutForm handleOnCheckoutFormChange handleOnSubmitCheckoutForm handleOnToggle  */
export default function Sidebar() {
  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <button className="toggle-button"></button>
    </section>
  )
}
