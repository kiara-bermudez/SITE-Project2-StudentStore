import * as React from "react"
import ShoppingCart from "../Shopping Cart/ShoppingCart"
import "./Sidebar.css"

/* Props: isOpen shoppingCart products checkoutForm handleOnCheckoutFormChange handleOnSubmitCheckoutForm handleOnToggle  */
export default function Sidebar(props) {
  

  return (
    <section className="sidebar">

      <button onClick={props.handleOnToggle} className="toggle-button"><i className="material-icons">menu</i></button>

      <div className={props.isOpen? "sidebar-area sidebar-open" : "sidebar-area sidebar-close"}>

        <ShoppingCart isOpen={props.isOpen} products={props.products} shoppingCart={props.shoppingCart}/>

      </div>
      
    </section>
  )
}
