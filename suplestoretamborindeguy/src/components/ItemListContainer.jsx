import ItemCart from "./ItemCart";

function ItemListContainer () {
    return (
        <div className="containerListCart container mt-5">
            <ItemCart titulo="Iphone X" descripcion="Su precisa tecnología de reconocimiento facial te garantiza un acceso al equipo rápido y seguro." precio="$25.000"/>
            <ItemCart titulo="Air Pods" descripcion="Los mejores auriculares inalambricos del mercado." precio="$5.000"/>
        </div>
    )
}
export default ItemListContainer;