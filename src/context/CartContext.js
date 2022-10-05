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
    
    const totalPrice = () => {
        return cart.reduce((prev , act) => prev + act.cantidad * act.precio, 0 );
    }
    
    const totalProducts = () => cart.reduce((acumulador,productoActual) => acumulador + productoActual.cantidad, 0);
    
    const removeItem = (id) => setCart(cart.filter(producto => producto.id !== id));
    
    const clear = () => setCart([]);
    
    const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false;
    
    
    return(
        <CartContext.Provider value={{
            addProduct,
            removeItem,        
            clear,
            isInCart,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider