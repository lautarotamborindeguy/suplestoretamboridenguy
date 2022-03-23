import React from 'react'
import ItemCount from './ItemCount'
const Item = ({producto}) =>  {
    let {nombre, precio, urlImages, altImages, descripcion, stock} = producto
    return (
        <div>
                <div className="mt-4 containerCart p-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="titleArticleCart">{nombre}</h2>
                        <p className="fw-bold mb-0">${precio}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={urlImages} alt={altImages} className="imagesCart"/>
                        <p className="mt-1 mb-1">{descripcion}</p>
                    </div>
                    <p className="fw-bold mb-3">En Stock: <span className="number-stock">{stock}</span></p>
                    <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Ver Más
                    </button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Detalles de </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Acá van los detalles
                            </div>
                            </div>
                        </div>
                    </div>
                    <ItemCount stock={stock}/>
                </div>
        </div>
    )
}

export default Item