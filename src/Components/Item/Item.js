import React from 'react';
import "./Item.css"
import { Link } from 'react-router-dom';


const Item = ({info}) =>{
    return(
        <Link to={`/detalle/${info.id}`} className='paletas'>
            <img src={info.image} alt='' />
            <p>{info.nombre}</p>
            <h1>${info.precio}</h1>
        </Link>
    )
}

export default Item;