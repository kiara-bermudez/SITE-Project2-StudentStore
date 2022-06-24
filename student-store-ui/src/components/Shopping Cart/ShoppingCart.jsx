import * as React from "react"
import "./ShoppingCart.css"

/* Props: isOpen products shoppingCart  */
export default function ShoppingCart(props) {
  return (
    <div className="shopping-cart">
      <h3>Shopping Cart</h3>
        <table className="shopping-cart-table">
          <tbody>
            <tr className="headers-row">
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Cost</th>
            </tr>
            
          </tbody>
        </table>   
    </div>
  )
}

// export default function ShoppingCartTable(props) {
//   return (
    
//   )
// }