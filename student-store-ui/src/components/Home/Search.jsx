import * as React from "react"
import search_icon from "../../assets/search_icon.png"

/* Props: searchText setSearchText getCategoryItem*/
export default function  Search(props) {
    const [showCategories, setShowCategories] = React.useState(true);

    const handleOnSearchTextChange = (event) => {
        props.setSearchText(event.target.value);
        console.log("search text", props.searchText);
        props.getSearchedItems(props.searchText);
    }

    const handleOnClickCategory = (event) => {
        if (event.target.id == "all-categories") {
            props.getProducts();
        } else {
            props.getCategoryItem(event.target.id); 
        }
        
    }

    const handleOnClickMenuBtn = (event) => {
        console.log("event", event);
        setShowCategories(!showCategories);
    }

  return (
    <div className="search-area">
        <div className="row">
            <div className="search-bar">
                <form>
                    <input type="text" name="search" placeholder="Search" value={props.searchText} onChange={handleOnSearchTextChange}/>
                </form>
            </div>
            <div className="buttons">
                <div className="help">
                    <span>
                       <i className="material-icons">help</i>
                        Help
                    </span>
                </div>
                <div className="cart">
                    <button className="cart-btn">My Cart <i className="material-icons">shopping_cart</i></button>
                </div>
            </div>
        </div>
        <div className="row" id="categories-area">
            <div className="menu-icon">
                <i className="material-icons" onClick={handleOnClickMenuBtn}>menu</i>
            </div>
            <div className={!showCategories ? "categories hidden" : "categories"} >
                <ul>
                    <li id="all-categories" onClick={handleOnClickCategory} >All Categories</li>
                    <li id="clothing" onClick={handleOnClickCategory} >Clothing</li>
                    <li id="food" onClick={handleOnClickCategory}>Food</li>
                    <li id="accessories" onClick={handleOnClickCategory}>Accessories</li>
                    <li id="tech" onClick={handleOnClickCategory}>Tech</li>
                </ul>
            </div>
        </div>
    </div>

  )
}