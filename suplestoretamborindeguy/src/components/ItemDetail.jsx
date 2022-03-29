import React from 'react'

const ItemDetail = ({producto}) =>  {
    let {nombre, precio, urlImages, altImages, descripcion, stock} = producto
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
                </div>
        </div>
    )
}

export default ItemDetail