import * as React from "react"

/* Props: product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart  */
export default function ProductView() {
  return (
    <div className="product-view">
        <h1 className="product-id"> Product # {/* Insert product id prop*/}</h1>
        {/* It should render a ProductCard component and pass it the props it needs. It should also set the showDescription prop to true for this product card. */}
    </div>
  )
}