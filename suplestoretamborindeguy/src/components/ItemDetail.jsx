import React, {useState} from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) =>  {
    let {nombre, precio, urlImages, altImages, descripcion, stock} = producto
    const [count,setCount] = useState(0)
    const enviarCarrito = () => {
        const objCarrito = {
            nombre,
            precio,
            urlImages,
            count
        }
        console.log(objCarrito)
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
                    <ItemCount stock={stock} count={count} setCount={setCount} enviarCarrito={enviarCarrito}/>
                </div>
        </div>
    )
}

export default ItemDetail