import ItemCart from "./ItemCart";

function ItemListContainer () {
    return (
        <div className="container">
            <div className="w-50 mt-4 float-end containerListCart">
                <ItemCart titulo="Whey Protein" descripcion="La proteína whey es el suplemento proteico que se obtiene a partir del aislamiento del suero de la leche." precio="$2.000" images="images/wheyprotein.jpg" altImages="Whey Protein"/>
                <ItemCart titulo="Creatina" descripcion="La creatina es una sustancia química que se encuentra naturalmente en el cuerpo." precio="$500" images="images/wheyprotein.jpg" altImages="Creatina"/>
                <div className="p-2 d-flex justify-content-between">
                    <p className="m-0">El costo total es de:</p>
                    <p className="m-0 fw-bold">$2.500</p>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer;