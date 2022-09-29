import React, {useState} from 'react';
import './ItemDetail.css';
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({data}) => {

    const [goToCart , setGoToCart] = useState(false); 
    const {addProduct} = useCartContext();

    const onAdd = (cantidad) =>{
        setGoToCart(true);
        addProduct(data,cantidad);
    }

    return(
    <div className='container'>
        <div className='detail'>
            <img className='detail__image' src={data.image} alt=""/>
            <div className='content'>
                <h1>{data.nombre}</h1> 
                <span>${data.precio}</span>
                <ul>
                    <li>{data.descripcion}</li>
                </ul>
                {
                    goToCart
                    ? <Link to='/cart'> Finalizar Compra </Link>
                    : <ItemCount stock={6} initial={1} onAdd={onAdd}/>
                }
            </div>
        </div>
    </div>
    );
}

export default ItemDetail