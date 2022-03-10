import ItemCart from "./ItemCart";
import ItemCount from "./ItemCount";


function ItemListContainer () {
    return (
        <div className="container containerListCart">
            <ItemCart titulo="Whey Protein" descripcion="La proteína whey es el suplemento proteico que se obtiene a partir del aislamiento del suero de la leche." precio="$2.000" images="images/wheyprotein.jpg" altImages="Whey Protein" stock="2" ItemCount= {<ItemCount stock="2"/>}/>
            <ItemCart titulo="Creatina" descripcion="La creatina es una sustancia química que se encuentra naturalmente en el cuerpo." precio="$500" images="images/wheyprotein.jpg" altImages="Creatina" stock="4" ItemCount= {<ItemCount stock="4"/>}/>
            <ItemCart titulo="BCAA" descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit." precio="$500" images="images/wheyprotein.jpg" altImages="Creatina" stock="0" ItemCount= {<ItemCount stock="0"/>}/>
        </div>
    )
} 
export default ItemListContainer;