import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetail from "../Product Detail/ProductDetail"
import NotFound from "../Not Found/NotFound"
import axios from 'axios'
import "./App.css"

export default function App() {
  // State variables
  const [products, setProducts] = React.useState([]); // array of product objects that is initially empty.
  const [isFetching, setIsFetching] = React.useState(false); // boolean value representing whether or not the App is currently fetching the products from the API
  const [error, setError] = React.useState(null); // variable used to display a message when something goes wrong with the API requests
  const [isOpen, setIsOpen] = React.useState(false); // boolean value representing whether or not the Sidebar.jsx is in the open or closed state.
  const [shoppingCart, setShoppingCart] = React.useState([]); // store state for the active user's shopping cart (items they want to purchase and the quantity of each item)
  const [checkoutForm, setCheckoutForm] = React.useState(null); // user's information that will be sent to the API when they checkout
  const [searchText, setSearchText] = React.useState(""); // text being typed into the search bar


  React.useEffect(() => {
    getProducts();
    setIsFetching(false);
  }, []);

  // API call to get the products for the store
  function getProducts() {
    // Make Get request to API
    setIsFetching(true);
    axios.get("https://codepath-store-api.herokuapp.com/store")
    .then(function (response) {
      const productData = response.data.products;
      setProducts(productData);
    })
    .catch(function (error) {
      console.log(error);
      setError(error);
    });
  };

  function getSearchedItems(text) {
    setIsFetching(true);
    axios.get("https://codepath-store-api.herokuapp.com/store")
    .then(function (response) {
      let productData = response.data.products;
      productData = productData.filter(product => product.name.includes(text));
      console.log("productdata", productData);
      setProducts(productData);
    })
    .catch(function (error) {
      console.log(error);
      setError(error);
    });
  };

  function getCategoryItem(category) {
    setIsFetching(true);
    axios.get("https://codepath-store-api.herokuapp.com/store")
    .then(function (response) {
      let productData = response.data.products;
      productData = productData.filter(product => product.category == category);
      console.log("productdata", productData);
      setProducts(productData);
    })
    .catch(function (error) {
      console.log(error);
      setError(error);
    });  
  }

  {/* It should toggle the open/closed state of the Sidebar */}
  function handleOnToggle() {
    setIsOpen(!isOpen);
  }

  console.log("shoppingCart", shoppingCart);
  function handleAddItemToCart(productId) {
    let containsItem = false;

    const newItem = {
      itemId: productId,
      quantity: 1
    }

    if (shoppingCart.length != 0) {
      containsItem = shoppingCart.some(item => (item.itemId==productId));
      if (containsItem) {
        console.log("new state");
        const newState = shoppingCart.map((item) => {
        if (item.itemId == productId) {
          oldQuantity=item.quantity;
          console.log("old quantity", item.quantity);
          return {...item, quantity:++item.quantity};
        }
        return item;
      })
        setShoppingCart(newState);
      } else {
        console.log("add new item");
        setShoppingCart([...shoppingCart, newItem]);
      }
    } else {
      console.log("create new list");
      setShoppingCart([newItem]);
    }

    


  }

  function handleRemoveItemFromCart(productId) {
    let containsItem = shoppingCart.some(item => (item.itemId==productId));
    let removeItem = false;

    if (containsItem) {
      let newState = shoppingCart.map((item) => {
        if (item.itemId == productId) {
          if (item.quantity-1 == 0) {
            removeItem = true;
            return item;
          }
          return {...item, quantity:--item.quantity};
        }
        return item;
      })

      if (removeItem) {
        console.log("remove item");
        newState = newState.filter(item => item.itemId != productId);
      }

      setShoppingCart(newState);
    }
  }

  

  let [showDescription, setShowDescription] = React.useState(false); // boolean that tells whether a product's description is visible

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<><Navbar /><Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} searchText={searchText} setSearchText={setSearchText} getSearchedItems={getSearchedItems} getCategoryItem={getCategoryItem} getProducts={getProducts} showDescription={showDescription} setShowDescription={setShowDescription}/><Sidebar /></>}/>

            <Route path="/products/:productId" element={<><Navbar /><ProductDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} isFetching={isFetching} setIsFetching={setIsFetching} error={error} setError={setError} products={products} shoppingCart={shoppingCart} showDescription={showDescription} setShowDescription={setShowDescription}/><Sidebar /></>}/>

            <Route path="*" element={<><Navbar /><Sidebar /><NotFound /></>}/>
          </Routes>
          
          
          
        </main>
      </BrowserRouter>
    </div>
  )
}
