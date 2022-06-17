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

  React.useEffect(() => {
    console.log("start");
    getProducts();
    console.log("end", products);
  }, []);

  // API call to get the products for the store
  function getProducts() {
    // Make Get request to API
    axios.get("https://codepath-store-api.herokuapp.com/store")
    .then(function (response) {
      const productData = response.data.products;
      setProducts(productData);
    })
    .catch(function (error) {
      console.log(error);
      setError(error);
    })
  };


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<><Navbar /><Home products={products}/><Sidebar /></>}/>
            <Route path="/products/:productId" element={<><Navbar /><Sidebar /><ProductDetail /></>}/>
            <Route path="*" element={<><Navbar /><Sidebar /><NotFound /></>}/>
          </Routes>
          
          
          
        </main>
      </BrowserRouter>
    </div>
  )
}
