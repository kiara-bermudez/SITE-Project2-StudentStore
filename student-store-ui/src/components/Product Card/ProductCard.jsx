import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"
import "../Product View/ProductView"

/* Props: product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription   */
export default function ProductCard(props) {
  return (
    <div className="product-card">
        {/* Should render an img element for the product: */}
        <div className="media">
          <Link to={`/products/${props.product.id}`}>
            <img src={props.product.image} alt={props.product.name} onClick={props.onClick} />
          </Link>
        </div>

        <div className="info-area">
          <div className="product-info">
            <p className="product-name">{props.product.name}</p>
            <p className="product-price">${props.product.price.toFixed(2)}</p>
            {props.showDescription ?  <p className="product-description">{props.product.description}</p> : <p className="product-description"></p>}
          </div>
        

          {/* Should render two buttons elements... */}
          {/* Icons source: https://developers.google.com/fonts/docs/material_icons */}
          <div className="quantity-area">
            <div className="card-btns">
              <button className="add" onClick={() => props.handleAddItemToCart(props.product.id)}>
                <i className="material-icons">add</i>
              </button>
              <button className="remove" onClick={() => props.handleRemoveItemFromCart(props.product.id)}>
                <i className="material-icons">remove</i>
              </button>
              
            </div>
            <div className="quantity">
              <p>{props.quantity != 0 ? props.quantity : ""}</p>
            </div>
          </div>
        </div>
        

        

        {/* Should display the current quantity of items that the user has selected in their shopping cart */}

    </div>
  )
}