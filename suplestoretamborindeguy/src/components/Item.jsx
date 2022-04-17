import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) =>  {
    let {id, nombre, precio, urlImages, altImages, categoria, stock} = producto
    return (
        <div>
                <div className="mt-4 containerCart bg-white">
                    <div className="d-flex justify-content-between align-items-center top-item bg-gradient">
                        <h2 className="titleArticleCart">{nombre}</h2>
                        <p className="fw-bold mb-0 text-white">${precio}</p>
                    </div>
                    <div className="d-flex justify-content-center mb-1 mt-1">
                        <img src={urlImages} alt={altImages} className="imagesCart"/>
                    </div>
                    <p className='text-center'>Categoria: {categoria}</p>
                    <p className="fw-bold text-center">¡Restan solamente <span className="number-stock">{stock}</span> articulos de este producto!</p>
                    <Link to={`/detail/${id}`}>
                        <button type="button" className=" btn-ver">
                            Ver Más
                        </button>
                    </Link>   
                </div>
        </div>
    )
}

export default Item