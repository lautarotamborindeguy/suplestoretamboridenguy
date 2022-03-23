import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
function ItemDetailContainer () {
    
    const [producto, setProducto] = useState([])
    const APIURL = 'https://fakestoreapi.com/products'; 
    
    function seteandoProductos(api, id) {
        fetch(`${api}/${id}`)
        .then((resultado)=>{return resultado.json()})
        .then((res) => setProducto(res))
    }
    
    useEffect(() =>{
        setTimeout(() => {
            seteandoProductos(APIURL, 1)
        }, 2000)
    }, [])
    
    return (
        <div className="container containerListCart">
            <ItemDetail producto={producto}/>
        </div>
    )
} 
export default ItemDetailContainer;