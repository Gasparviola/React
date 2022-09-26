import React,{useEffect , useState} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const productos = [
    {id:0 , image:"https://http2.mlstatic.com/D_NQ_NP_771242-MLA46764819864_072021-O.webp",nombre: "Paleta Adidas Zukur" , categoria:'Importada', precio:"50000",},
    {id:1 , image:"https://http2.mlstatic.com/D_NQ_NP_711945-MLA44190542179_112020-O.webp",nombre: "Paleta Steel Custom Air Boom", categoria:'Nacional',precio:"30000"},
    {id:2 , image:"https://http2.mlstatic.com/D_NQ_NP_908495-MLA48366205673_112021-O.webp",nombre: "Paleta Sane Impronta 3.1", categoria:'Nacional',precio:"25000"},
    {id:3 , image:"https://http2.mlstatic.com/D_NQ_NP_877507-MLA50344943545_062022-O.webp",nombre: "Paleta Bullpadel Onyx", categoria:'Importada',precio:"45000"},
    {id:4 , image:"https://http2.mlstatic.com/D_NQ_NP_759572-MLA51295448338_082022-O.webp",nombre: "Paleta Babolat Viper", categoria:'Importada',precio:"100000"},
    {id:5 , image:"https://http2.mlstatic.com/D_NQ_NP_782462-MLA49655029430_042022-O.webp",nombre: "Paleta Odea Passion", categoria:'Importada',precio:"83000"},
    {id:6 , image:"https://http2.mlstatic.com/D_NQ_NP_873946-MLA49940445703_052022-O.webp",nombre: "Paleta Royal Extreme", categoria:'Nacional',precio:"34000"},
];


const Tittle = ({greeting}) => {

        const [data , setData] = useState([]);

        const {categoriaId} = useParams();
        
        useEffect(() => {   
            const getData = new Promise(resolve => {
                setTimeout(() => {
                    resolve(productos);
                }, 1000);
            });
            if (categoriaId) {
                getData.then(res => setData(res.filter( producto => producto.categoria === categoriaId)));
            } else {
                getData.then(res => setData(res));
            }
            
        }, [categoriaId])
        
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