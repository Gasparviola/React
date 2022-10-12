import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart/ItemCart';

const Cart = () => {
    const { cart , totalPrice } = useCartContext();
    
    const order = {
        buyer: {
            name:'Santiago',
            email:'santiagof@hotmail.com',
            phone:'2664576534',
            adress:'Buenos Aires 275'
        },
        items:cart.map(producto => ({ id:producto.id, nombre:producto.nombre, precio:producto.precio, cantidad: producto.cantidad})),
        total:totalPrice(),
    }
    
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db,'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }
    
    if (cart.length === 0) {
        return(
            <>
                <p>No hay productos en el carrito</p>
                <Link to='/'>Ir a la tienda</Link>
            </>
        );
    }
    
    return(
        <>
            {
                cart.map (producto => <ItemCart key={producto.id} producto={producto}/>)
            }
            <p>
                Total: ${totalPrice()} 
            </p>
            <button onClick={handleClick}>Emitir Compra</button>
        </>
    )
}

export default Cart 