import * as React from "react"
import "./CheckoutForm.css"

/* Props: isOpen shoppingCart checkoutForm handleOnCheckoutFormChange handleOnSubmitCheckoutForm */
export default function CheckoutForm(props) {
  return (
    <div className="checkout-form">
        <input className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org" value={props.checkoutForm.email} onChange={event => props.handleOnCheckoutFormChange(event.target.name, event.target.value)}></input>

        <input className="checkout-form-input" type="text" name="name" placeholder="Student Name" value={props.checkoutForm.name} onChange={event => props.handleOnCheckoutFormChange(event.target.name, event.target.value)}></input>

        <div className="error">
          {props.error? 
          <p className="error">{props.error}</p>
          :""}
        </div>

        <button className="checkout-button" onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>

        <div className="checkout-info">
          <h3>Checkout Info</h3>
          {props.orderSent? 
          <>
            <p className="success">Success!</p>
            <p className="receipt-line" id="receipt-first-line">{props.receipt.lines[0]}</p>
            <ul className="receipt">
              {props.receipt.lines.map((line, idx) => {
                return (
                idx===0?
                ""
                :<li className="receipt-line" key={idx}>{line}</li>)
              })}
            </ul>
            
          </>
          :<p>Add items to your shopping cart, fill out the payment info, and click Checkout to send your order!</p>
          } 
        </div>
    </div>
  )
}