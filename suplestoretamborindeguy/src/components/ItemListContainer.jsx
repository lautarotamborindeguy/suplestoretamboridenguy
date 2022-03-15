import React, {useState} from 'react'
import ItemCart from "./ItemCart";
import ItemList from "./ItemList";
function ItemListContainer () {
    function productosItem (){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                let productos = [{key: 1, nombre: 'Whey Protein', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', precio: 2000, urlImages: 'images/wheyprotein.jpg', altImages: 'Imagen del Producto', stock: 3}, {key: 2, nombre: 'Creatina', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', precio: 500, urlImages: 'images/wheyprotein.jpg', altImages: 'Imagen del Producto', stock: 5}, {key: 3, nombre: 'Bcaa', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', precio: 1000, urlImages: 'images/wheyprotein.jpg', altImages: 'Imagen del Producto', stock: 0}]
                
                if(productos.lenght === 0) {
                    reject("No hay productos disponibles")
                } else {
                    resolve(productos)
                }
            }, 2000)
        }) 
    }
    const [productos, setProductos] = useState([productosItem().then((resultado) => {
        return resultado
    })])
    return (
        <div className="container containerListCart">
            <ItemCart titulo="Whey Protein" descripcion="La proteína whey es el suplemento proteico que se obtiene a partir del aislamiento del suero de la leche." precio="$2.000" images="images/wheyprotein.jpg" altImages="Whey Protein" stock="2" />
            <ItemCart titulo="Creatina" descripcion="La creatina es una sustancia química que se encuentra naturalmente en el cuerpo." precio="$500" images="images/wheyprotein.jpg" altImages="Creatina" stock="4" />
            <ItemCart titulo="BCAA" descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit." precio="$500" images="images/wheyprotein.jpg" altImages="Creatina" stock="0" />
            <ItemList lista = {productos}/>
        </div>
    )
} 
export default ItemListContainer;