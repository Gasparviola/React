import React,{useEffect , useState} from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore , collection , getDocs , query , where} from 'firebase/firestore';


const Tittle = ({greeting}) => {

        const [data , setData] = useState([]);

        const {categoriaId} = useParams();
        
        useEffect(() => {   
            const querydb = getFirestore();
            const queryCollection = collection(querydb , 'productos');
            if (categoriaId) {
                const queryFilter = query(queryCollection, where('categoria' , '==' , categoriaId ))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(producto => ({id: producto.id , ...producto.data() }))))
            } else {
                getDocs(queryCollection)
                .then(res => setData(res.docs.map(producto => ({id: producto.id , ...producto.data() }))))
            }
            
        }, [categoriaId])
        
    
    
        return(
        <>
        <h1 className="tittle">{greeting}</h1>
        <ItemList data={data}/>
        </>
        
    )
}

export default Tittle 