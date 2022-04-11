import React, {useContext, useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const ItemDetail = ({producto}) =>  {
    let {id, nombre, precio, urlImages, altImages, descripcion, stock} = producto
    const [count,setCount] = useState(1)
    const valores = useContext(CartContext)
    
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
            <div>
                    <div className="mt-4 p-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="titleArticleCart">{nombre}</h2>
                            <p className="fw-bold mb-0">${precio}</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src={urlImages} alt={altImages} className="imagesCart" />
                            <p className="mt-1 mb-1">{descripcion}</p>
                        </div>
                        <p className="fw-bold mb-0"> {stock}</p>
                        <ItemCount stock={stock} count={count} setCount={setCount} />
                        <Link to={`/CartContainer`}><p className="btn btn-success mt-5" onClick={()=>valores.addProductos(objCarrito)}>Agregar al Carrito</p></Link>
                    </div>
            </div>
    )
}

export default ItemDetail