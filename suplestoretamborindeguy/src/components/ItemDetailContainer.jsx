import React, {useState, useEffect, useContext} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import { CustomContext } from './CustomContext';

function ItemDetailContainer () {
    
    const [producto, setProducto] = useState([])
    const {itemId} = useParams()
    const APIURL = 'https://raw.githubusercontent.com/lautarotamborindeguy/lautarotamborindeguy.github.io/main/suplestore/productos.json'; 
    
    function seteandoProductos(api) {
        fetch(`${api}`)
        .then((resultado)=>{ return resultado.json()})
        .then((res) => setProducto(res.find(prod =>(prod.id === Number(itemId)))))
    }
    
    useEffect(() =>{
        setTimeout(() => {
            seteandoProductos(APIURL, 1)
        }, 500)
    }, [itemId])
    const valores = useContext(CartContext);

    return (
        <div className="container">
            <ItemDetail producto={producto}/>
        </div>
    )
} 
export default ItemDetailContainer;