import * as React from "react"
import ProductCard from "../Product Card/ProductCard"
import "./ProductGrid.css"
import axios from "axios";

/* Props: products, handleAddItemToCart, handleRemoveItemToCart  */
export default function ProductGrid(props) {

  // function getProductDetails() {
  //   //props.setIsFetching(true);
  //   axios.get("https://codepath-store-api.herokuapp.com/store/" + productId)
  //   .then(function (response) {
  //     const productData = response.data.product;
  //     console.log("productdetails", productData);
  //     setProduct(productData);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     props.setError(error);
  //   });  
  // }

  //props.setShowDescription(false);

  let filteredProducts = [];
  const filterBySearch = () => {
    console.log("products", props.products);
    if (props.searchText) {
      let searchText = props.searchText.toLowerCase();
      filteredProducts = props.products.filter(product => {
        let productName = product.name.toLowerCase();
        return productName.includes(searchText);
      })
    } else {
      filteredProducts = props.products;
    }
    console.log("filtered", filteredProducts);
  } 

  return (
    <div className="product-grid">
      <div className="title">
        <h2>Best Selling Products</h2>
      </div>
        {filterBySearch()}
        {/*  Should iterate over its products prop, rendering a ProductCard component for each one. Set the showDescription prop to false for all of the ProductCard components rendered in the ProductGrid component. */}
        <div className="grid">
          {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} showDescription={false} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} quantity={props.shoppingCart.length!=0 && props.shoppingCart.find((i) => i.itemId == product.id)!=undefined ? props.shoppingCart.find((i) => i.itemId == product.id).quantity : 0}   setShowDescription={props.setShowDescription} />
          ))}
        </div>
        
    </div>
  )
}