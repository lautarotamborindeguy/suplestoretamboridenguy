const ItemCart = (props) =>  {
    let {titulo,descripcion,precio} = props
    return (
            <div className="p-2 border-bottom">
                <h2 className="titleArticleCart">{titulo}</h2>
                <div className="d-flex justify-content-between mt-2 align-items-center">
                    <p>{descripcion}</p>
                    <p>{precio}</p>
                </div>
            </div>
    )
}
export default ItemCart;