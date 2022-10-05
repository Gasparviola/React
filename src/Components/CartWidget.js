import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCartContext } from '../context/CartContext';


const CartWidget =() =>{
    const { totalProducts } = useCartContext();
    return(
        <>
            <ShoppingCartOutlinedIcon fontSize="large"/>
            <span> {totalProducts() || '' } </span>
        </>
        
    )
}


export default CartWidget