import * as React from "react"
import ProductCard from "../Product Card/ProductCard";
import "./ProductView.css"

/* Props: product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart  */
export default function ProductView(props) {
  console.log("here",props.product);
  return (
    <div className="product-view">
        <h1 className="product-id"> Product #{props.productId}</h1>
        {/* It should render a ProductCard component and pass it the props it needs. It should also set the showDescription prop to true for this product card. */}
        <ProductCard product={props.product} productId={props.productId} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} quantity={props.quantity} showDescription={true}/>
    </div>
  )
}