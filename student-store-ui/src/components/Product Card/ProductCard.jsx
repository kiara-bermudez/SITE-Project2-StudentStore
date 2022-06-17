import * as React from "react"

/* Props: product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription   */
export default function ProductCard(props) {
  return (
    <div className="product-card">
        <p className="product-name">{props.product.name}</p>
        <p className="product-price">${props.product.price}</p>
        <p className="product-description">{props.product.description}</p>
        {/* Should render an img element for the product: */}
        <img src={props.product.image} alt={props.product.name} />
        {/* Should render two buttons elements... */}
        {/* Should display the current quantity of items that the user has selected in their shopping cart */}
    </div>
  )
}