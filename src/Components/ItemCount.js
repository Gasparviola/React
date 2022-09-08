import React,{useState} from 'react'

const ItemCount = ({stock , initial , onAdd}) => {

    const [contador, setContador] = useState(initial);

    const sumar = () =>{
        setContador(contador + 1);  
        
    }

    const restar = () => {
        setContador(contador - 1);  
        
    }


    return(
        <>
        
        <div className='contador'>
            <h1>Carrito de Compras</h1>
            <button disabled={contador <= 1} onClick={restar}>-</button>
            <span >{contador}</span>
            <button disabled={contador >= stock} onClick={sumar}>+</button>
            <div>
                <button disabled={stock <= 0}  onClick={() => onAdd(contador)}>Agregar al Carrito</button>
            </div>
        </div>
        </>
    
    )

}

export default ItemCount