import React from 'react';
import './ItemDetail.css';


const ItemDetail = ({data}) => {
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
            </div>
        </div>
    </div>
    );
}

export default ItemDetail