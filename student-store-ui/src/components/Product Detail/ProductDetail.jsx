import axios from "axios";
import * as React from "react"
import { useParams } from "react-router-dom";
import ProductView from "../Product View/ProductView";
import NotFound from "../Not Found/NotFound";


/* Props: handleAddItemToCart, handleRemoveItemToCart  */
/* Should define at least a product state variable and updater */
/* It should leverage the useParams hook from react-router-dom to extract the productId param from the url */
/* More instructions  */
export default function ProductDetail(props) {
  const [product, setProduct] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [hasFetched, setHasFetched] = React.useState(false);

  let {productId} = useParams();
  console.log("id check", productId);

  React.useEffect(() => {
    console.log("using effect")
    const fetchProductById = async () => {
      setIsLoading(true);
      setHasFetched(false);

      try {
        const response = await axios.get(`${props.localPath}/${productId}`);
        const productData = response.data.product;
        setProduct(productData);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      
      setIsLoading(false);
      setHasFetched(true);
    }

    fetchProductById();

    console.log("id check3", product);
  }, [productId]);
  // console.log("params id", productId);

   const quantity = props.shoppingCart.length!=0 && props.shoppingCart.find((i) => i.itemId == productId)!=undefined ? props.shoppingCart.find((i) => i.itemId == productId).quantity : 0;

  const productDetailsDisplay = () => {
    if (error) {
      console.log(error);
      return (<NotFound />);
    }

    if (isLoading) {
      return (<h1>Loading...</h1>);
    }

    if (product && !isLoading && hasFetched) {
      return(<ProductView product={product} productId={productId} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} quantity={quantity} onClick={props.onClick} setShowDescription={props.setShowDescription}/>)
    } 

    return (<h1>Loading...</h1>);
  }
    

  return (
    <div className="product-detail">
        {productDetailsDisplay()}
    </div>
  )
}