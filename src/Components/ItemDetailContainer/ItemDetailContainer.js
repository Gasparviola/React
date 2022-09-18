import React, {useState,useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


const productos = {id:0 , image:"https://http2.mlstatic.com/D_NQ_NP_908495-MLA48366205673_112021-O.webp",nombre: "Paleta Sane Impronta",precio:"$24000"};

const ItemDetailContainer = () => {

    const [data,setData] = useState ({});
    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            },3000);
        });
        
        getData.then(res => setData(res));
    },[])

    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer