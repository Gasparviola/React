import React, {useState,useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const productos = [
    {id:0 , image:"https://http2.mlstatic.com/D_NQ_NP_771242-MLA46764819864_072021-O.webp",nombre: "Paleta Adidas Zukur" , categoria:'Importada', precio:"50000",descripcion:"Material del núcleo: soft eva,Forma redonda,Peso mínimo de 360g y máximo de 375gBalance bajo"},
    {id:1 , image:"https://http2.mlstatic.com/D_NQ_NP_711945-MLA44190542179_112020-O.webp",nombre: "Paleta Steel Custom Air Boom", categoria:'Nacional',precio:"30000",descripcion:"Material del núcleo: espuma.Material exterior: fibra de vidrio.Forma de diamante.Perfil de 38mm.Peso mínimo de 360g y máximo de 375g."},
    {id:2 , image:"https://http2.mlstatic.com/D_NQ_NP_908495-MLA48366205673_112021-O.webp",nombre: "Paleta Sane Impronta 3.1", categoria:'Nacional',precio:"25000",descripcion:"Materiales del núcleo: Soft EVA.Materiales del exterior: Fibra de vidrio.Forma de la cabeza: Gota.Grosor del perfil: 38 mm."},
    {id:3 , image:"https://http2.mlstatic.com/D_NQ_NP_877507-MLA50344943545_062022-O.webp",nombre: "Paleta Bullpadel Onyx", categoria:'Importada',precio:"45000",descripcion:"Materiales del núcleo: Soft EVA.Forma de la cabeza: Redonda.Materiales del exterior: Carbono,Fibra.Balance: Bajo."},
    {id:4 , image:"https://http2.mlstatic.com/D_NQ_NP_759572-MLA51295448338_082022-O.webp",nombre: "Paleta Babolat Viper", categoria:'Importada',precio:"100000",descripcion:"Materiales del núcleo: Multi-EVA.Materiales del exterior: Carbono.Grosor del perfil: 38 mm.Forma de la cabeza: Diamante."},
    {id:5 , image:"https://http2.mlstatic.com/D_NQ_NP_782462-MLA49655029430_042022-O.webp",nombre: "Paleta Odea Passion", categoria:'Importada',precio:"83000",descripcion:"Materiales del núcleo: Eva Soft.Materiales del exterior: Carbon 18K.Grosor del perfil: 38 mm.Forma de la cabeza: Lágrima."},
    {id:6 , image:"https://http2.mlstatic.com/D_NQ_NP_873946-MLA49940445703_052022-O.webp",nombre: "Paleta Royal Extreme", categoria:'Nacional',precio:"34000",descripcion:"Materiales del núcleo: Foam.Materiales del exterior: Fibra de vidrio.Grosor del perfil: 38 mm.Forma de la cabeza: Redonda."},
];

const ItemDetailContainer = () => {

    const [data,setData] = useState ({});
    
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            },1000);
        });
        
        getData.then(res => setData(res.find(producto => producto.id === parseInt(detalleId))));
    },[])

    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer