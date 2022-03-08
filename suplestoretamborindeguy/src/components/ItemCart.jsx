const ItemCart = (props) =>  {
    let {titulo,descripcion,precio,images,altImages} = props
    return (
            <div className="p-2 border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="titleArticleCart">{titulo}</h2>
                    <p className="fw-bold mb-0">{precio}</p>
                </div>
                <div className="d-flex align-items-center">
                    <img src={images} alt={altImages} className="imagesCart"/>
                    <p className="mt-1 mb-1">{descripcion}</p>
                </div>
            </div>
    )
}
export default ItemCart;