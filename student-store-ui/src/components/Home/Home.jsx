import * as React from "react"
import Hero from "../Hero/Hero"
import ProductGrid from "../Product Grid/ProductGrid"
import About from "./About"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import Search from "./Search"
import "./Home.css"


/* Props: products, handleAddItemToCart, handleRemoveItemToCart  */
export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <Search searchText={props.searchText} setSearchText={props.setSearchText} getProducts={props.getProducts} getSearchedItems={props.getSearchedItems} getCategoryItem={props.getCategoryItem}/>
      <ProductGrid products={props.products} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} shoppingCart={props.shoppingCart} onClick={props.handleOnClickCard}/>
      <About />
      <ContactUs />
      <Footer />
    </div>
    
  )
}
