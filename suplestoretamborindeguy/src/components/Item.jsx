import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) =>  {
    let {id, nombre, precio, urlImages, altImages, categoria, stock} = producto
    return (
        <div>
                <div className="mt-4 containerCart">
                    <div className="d-flex justify-content-between align-items-center top-item bg-gradient">
                        <h2 className="titleArticleCart">{nombre}</h2>
                        <p className="fw-bold mb-0 text-white">${precio}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={urlImages} alt={altImages} className="imagesCart"/>
                    </div>
                    <p>Categoria: {categoria}</p>
                    <p className="fw-bold mb-0">En Stock: <span className="number-stock">{stock}</span></p>
                    <Link to={`/detail/${id}`}>
                        <button type="button" className="btn btn-primary mb-3">
                            Ver Más
                        </button>
                    </Link>   
                </div>
        </div>
    )
}

export default Item