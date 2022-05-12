import { createContext, useState } from "react";

const CartContext = createContext({
    products : []
});

export const CartContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    
    const addProduct = (product) => {
        setProductList([product, ...productList])
    }

    const removeProduct = (id) => {
        setProductList(productList.filter(i => i.id !== id));
    }

    const clear = () => {
        setProductList([]);
    }

    const isInCart = (id) => {

    }
    const getCartQuantity = () => {
        
    }

    return (
        <CartContext.Provider value={{
            products: productList,
            addProduct: addProduct,
            removeProduct: removeProduct,
            clear: clear,
            isInCart: isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;