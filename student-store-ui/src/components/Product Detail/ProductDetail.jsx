import * as React from "react"
import { useParams } from "react-router-dom";
import ProductView from "../Product View/ProductView";


/* Props: handleAddItemToCart, handleRemoveItemToCart  */
/* Should define at least a product state variable and updater */
/* It should leverage the useParams hook from react-router-dom to extract the productId param from the url */
/* More instructions  */
export default function ProductDetail(props) {

  let {productId} = useParams();
  console.log("params id", productId);

  const quantity = props.shoppingCart.length!=0 && props.shoppingCart.find((i) => i.itemId == productId)!=undefined ? props.shoppingCart.find((i) => i.itemId == productId).quantity : 0;

  const productProp = props.products.filter(p => p.id == productId);

  console.log("q", quantity);
  console.log("p", props.products);

  //props.setShowDescription(true);


  // React.(() => {
  //   getProductDetails();
  //   props.setIsFetching(false);
  //   console.log("product", product);
  // }, []);

  return (
    <div className="product-detail">
        {props.isFetching ? 
        <h1>Loading...</h1> :
        <ProductView product={productProp} productId={productId} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} quantity={quantity} onClick={props.onClick} setShowDescription={props.setShowDescription}/>
        }
    </div>
  )
}