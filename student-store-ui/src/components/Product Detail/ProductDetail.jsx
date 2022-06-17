import * as React from "react"

/* Props: handleAddItemToCart, handleRemoveItemToCart  */
/* Should define at least a product state variable and updater */
/* It should leverage the useParams hook from react-router-dom to extract the productId param from the url */
/* More instructions  */
export default function ProductDetail() {
  return (
    <div className="product-detail">
        {/* Should use the Link component from react-router-dom to link to the home route (/) when clicked*/}
        <p>Product Details</p>
    </div>
  )
}