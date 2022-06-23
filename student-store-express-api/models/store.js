const { storage } = require("../data/storage")
const {NotFoundError, BadRequestError} = require("../utils/errors")

class Store {
    static async listProducts() {
        // list all items in the transactions array
        const products = storage.get("products").value();
        return products;
    }    

    static async fetchProductById(productId) {
        // get item using the product id
        const product = storage.get("products").find({id: Number(productId)}).value();
        return product;
    }

    static async listPurchases() {
        const purchases = storage.get("purchases").value();
        return purchases;
    }

    static async createPurchaseOrder(shoppingCart, user) {
        // Create a new purchase order

        // Check if shoppingCart and user fields are provided
        if(!shoppingCart) {
            throw new BadRequestError("ShoppingCart is required in purchase order");
        } else if (!user) {
            throw new BadRequestError("User is required in purchase order")
        }

        // Check if shopping cart and user have all required fields
        const requiredCartFields = ["itemId", "quantity"];
        const requiredUserFields = ["name", "email"];
        let totalCost = 0;
        let itemIdSet = new Set();        
        let itemIdArray = [];


        shoppingCart.forEach( async(item) => {
            requiredCartFields.forEach((field) => {
                if(!item[field] && item[field] !== 0) {
                    throw new BadRequestError(`Shopping Cart Field: "${field}" is required`);
                }
            })
            // Get the item's price and add it and tax to total cost
            const itemDetails = await Store.fetchProductById(item.itemId);
            const tax = (itemDetails.price * item.quantity * .0875);
            totalCost += ((itemDetails.price * item.quantity)+tax);

            // Push item id to array
            itemIdSet.add(item.itemId);
            itemIdArray.push(item.itemId);
        })

        requiredUserFields.forEach((field) => {
            if(!user[field] && item[field] !== 0) {
                throw new BadRequestError(`User Field: "${field}" is required`);
            }
        })


        // Write new purchase order
        const purchases = await Store.listPurchases();
        const purchaseId = purchases.length + 1;
        const date = new Date().toISOString();

        let hasDuplicate = itemIdArray.length != itemIdSet.size
        if (hasDuplicate) {
            throw new BadRequestError("There should not be duplicate items in Shopping Cart");
        }
        
        const newPurchaseOrder = {id: purchaseId, name: user.name, email: user.email, order: shoppingCart, total: Math.round((totalCost + Number.EPSILON) * 100) / 100, createdAt: date};

        storage.get("purchases").push(newPurchaseOrder).write();

        return newPurchaseOrder;
    }
}

module.exports = Store;