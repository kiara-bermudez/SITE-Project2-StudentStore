import * as React from "react"
import Hero from "../Hero/Hero"
import ProductGrid from "../Product Grid/ProductGrid"
import "./Home.css"


/* Props: products, handleAddItemToCart, handleRemoveItemToCart  */
export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <ProductGrid products={props.products}/>
    </div>
    
  )
}
