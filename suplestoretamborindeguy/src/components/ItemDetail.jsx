import React from 'react'

const ItemDetail = ({producto}) =>  {
    let {title, price, image, description, category} = producto
    return (
        <div>
                <div className="mt-4 p-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="titleArticleCart">{title}</h2>
                        <p className="fw-bold mb-0">${price}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={image} className="imagesCart"/>
                        <p className="mt-1 mb-1">{description}</p>
                    </div>
                    <p className="fw-bold mb-0"> {category}</p>
                </div>
        </div>
    )
}

export default ItemDetail