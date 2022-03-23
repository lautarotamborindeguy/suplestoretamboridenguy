import ItemCount from "./ItemCount";
const ItemCart = (props) =>  {
    let {titulo, categoria, descripcion,precio,images,altImages, stock} = props
    return (
            <div>
                <div className="mt-4 containerCart p-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="titleArticleCart">{titulo}</h2>
                        <p className="fw-bold mb-0">{precio}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={images} alt={altImages} className="imagesCart"/>
                        <p className="mt-1 mb-1">{descripcion}</p>
                    </div>
                    <p>Categoria: {categoria}</p>
                    <p className="fw-bold mb-0">En Stock: <span className="number-stock">{stock}</span></p>
                    <ItemCount stock={stock}/>
                </div>
            </div>
    )
}
export default ItemCart;