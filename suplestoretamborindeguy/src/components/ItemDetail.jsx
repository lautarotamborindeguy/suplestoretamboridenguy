import React, {useContext, useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const ItemDetail = ({producto}) =>  {
    let {id, nombre, precio, urlImages, altImages, descripcion, stock} = producto
    const [count,setCount] = useState(1)
    const valores = useContext(CartContext)
    const urlRutaCorregida = "." + urlImages;
    const objCarrito = {
        id,
        nombre,
        precio,
        urlImages,
        altImages,
        descripcion,
        stock, 
        count
    }

    return (
                    <div className="mt-4 p-2 container-detail d-flex align-items-center">
                        <img src={urlRutaCorregida} alt={altImages} className="images-detail"/>
                        <div>
                            <h2 className="title-detail">{nombre}</h2>
                            <p className="precio-detail">${precio}</p>        
                            <p className="mb-2">{descripcion}</p>
                            <p className="fw-bold mb-2">Stock: {stock}</p>
                            <ItemCount stock={stock} count={count} setCount={setCount} />
                            <Link to={`/CartContainer`}><p className="btn btn-carrito" onClick={()=>valores.addProductos(objCarrito)}>Agregar al Carrito</p></Link>
                        </div>
                    </div>
    )
}

export default ItemDetail