import * as React from "react"
import ProductCard from "../Product Card/ProductCard"

/* Props: products, handleAddItemToCart, handleRemoveItemToCart  */
export default function ProductGrid(props) {
  return (
    <div className="product-grid">
        {/*  Should iterate over its products prop, rendering a ProductCard component for each one. Set the showDescription prop to false for all of the ProductCard components rendered in the ProductGrid component. */}
        {props.products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}