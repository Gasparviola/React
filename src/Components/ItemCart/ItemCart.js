import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './ItemCart.css';

const ItemCart = ({ producto }) => {
    
    const { removeItem } = useCartContext();
    
    return (
        <div className='itemCart'>
            <img src={producto.image} alt={producto.nombre}/>
            <div>
                <p>Titulo: {producto.nombre}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio por unidad: ${producto.precio}</p>
                <p>Subtotal: ${producto.cantidad * producto.precio}</p>
                <button onClick={() => removeItem(producto.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}


export default ItemCart