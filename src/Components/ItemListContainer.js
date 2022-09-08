import React from "react";
import ItemCount from "./ItemCount";



const tittle = ({greeting}) =>{
        const onAdd = (cantidad) =>{
            console.log(`Añadiste ${cantidad} paletas`)
        }
    return(
        <>
        <h1 className="tittle">{greeting}</h1>
        <ItemCount stock={6} initial={1} onAdd={onAdd}/>
        </>
        
    )
}

export default tittle 