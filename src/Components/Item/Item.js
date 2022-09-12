import React from 'react';
import "./Item.css"


const Item = ({info}) =>{
    return(
        <a href='' className='paletas'>
            <img src={info.image} alt='' />
            <p>{info.nombre}</p>
        </a>
    )
}

export default Item;