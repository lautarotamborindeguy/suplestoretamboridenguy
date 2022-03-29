import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
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
        }, 2000)
    }, [itemId])
    
    return (
        <div className="container containerListCart">
            <ItemDetail producto={producto}/>
        </div>
    )
} 
export default ItemDetailContainer;