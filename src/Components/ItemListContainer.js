import React,{useEffect , useState} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productos = [
    {id:0 , image:"https://http2.mlstatic.com/D_NQ_NP_771242-MLA46764819864_072021-O.webp",nombre: "Paleta Adidas"},
    {id:1 , image:"https://http2.mlstatic.com/D_NQ_NP_711945-MLA44190542179_112020-O.webp",nombre: "Paleta Steel Custom"},
    {id:2 , image:"https://http2.mlstatic.com/D_NQ_NP_908495-MLA48366205673_112021-O.webp",nombre: "Paleta Sane Impronta"},
];

const Tittle = ({greeting}) => {

        const [data , setData] = useState([]);
        
        useEffect(() => {   
            const getData = new Promise(resolve => {
                setTimeout(() => {
                    resolve(productos);
                }, 3000);
            });
            getData.then(res => setData(res));
            
        }, [])
        
        const onAdd = (cantidad) =>{
            console.log(`Añadiste ${cantidad} paletas`);
        }
    
        return(
        <>
        <h1 className="tittle">{greeting}</h1>
        <ItemCount stock={6} initial={1} onAdd={onAdd}/>
        <ItemList data={data}/>
        </>
        
    )
}

export default Tittle 