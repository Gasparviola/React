import React, { useState, useContext } from 'react'
const CartContext = React.createContext([]); 

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart , setCart] = useState([]);
    
    const addProduct = (item , cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map(producto => {
                return producto.id === item.id ? {...producto, cantidad: producto.cantidad + cantidad } : producto
            }));
        } else {
            setCart([...cart , {...item , cantidad}]);
        }
    }
    console.log ('carrito:' , cart);

    const removeItem = (id) => setCart(cart.filter(producto => producto.id !== id));
    
    const clear = () => setCart([]);
    
    const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false;
    
    
    return(
        <CartContext.Provider value={{
            addProduct,
            removeItem,        
            clear,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider