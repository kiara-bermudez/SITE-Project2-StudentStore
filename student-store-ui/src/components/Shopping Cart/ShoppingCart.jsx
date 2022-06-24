import * as React from "react"
import "./ShoppingCart.css"

/* Props: isOpen products shoppingCart  */
export default function ShoppingCart(props) {
  let subtotal=0; 
  let tax=0;
  let total = 0;

  function calculatePayment() {
    tax = subtotal * .0875;
    total = subtotal + tax;
  }

  return (
    <div className="shopping-cart">
      <h3>Shopping Cart</h3>
      {props.shoppingCart.length!==0?
      <>
        <table className="shopping-cart-table">
          <tbody className="shopping-cart-table">
            <tr className="headers-row">
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Cost</th>
            </tr>
            {props.shoppingCart.map((item) => {
              const filterProducts = props.products.filter((product) => (product.id == item.itemId));
              const product = filterProducts[0];
              const cost = (product.price * item.quantity);
              subtotal += cost;
              return (
                <tr className="product-row" key={item.itemId}>
                  <td className="cart-product-name">{product.name}</td>
                  <td className="cart-product-quantity">{item.quantity}</td>
                  <td className="cart-product-price">${product.price.toFixed(2)}</td>
                  <td className="cart-product-cost">${cost.toFixed(2)}</td>
                </tr>);
            })}
          </tbody>
        </table>  
        <table className="payment-table">
          <tbody className="payment-table">
            {calculatePayment()}
              <tr className="payment-subtotal">
                <td className="payment-row-title">Subtotal</td>
                <td className="payment-row-value">${subtotal!==0?subtotal.toFixed(2):0.00}</td></tr>
              <tr className="payment-tax">
                <td className="payment-row-title">Taxes and Fees</td>
                <td className="payment-row-value">${tax!==0?tax.toFixed(2):0.00}</td></tr>
              <tr className="payment-total">
                <td className="payment-row-title">Total</td>
                <td className="payment-row-value">${total!==0?total.toFixed(2):0.00}</td>
              </tr>
          </tbody>
        </table> 
        </>
      : <p className="notification">No items added to cart yet. Start shopping now!</p>
    }
    </div>
  )
}
