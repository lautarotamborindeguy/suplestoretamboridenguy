import React, {useState, useEffect} from 'react'
import ItemCart from "./ItemCart";
import ItemList from "./ItemList";
function ItemListContainer () {
    
    const [productos, setProductos] = useState([])
    
    useEffect(() =>{
        const promesa = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve([{id: 1, nombre: "Whey Protein", descripcion: "La proteína whey es el suplemento proteico.", precio: 2000, urlImages: "images/wheyprotein.jpg", altImages: "Whey Protein", stock: 2},
                    {id: 1, nombre: "Creatina", descripcion: "lorem impsum.", precio: 500, urlImages: "images/wheyprotein.jpg", altImages: "Creatina", stock: 3},
                    {id: 1, nombre: "Bcaa", descripcion: "lorem impsum.", precio: 300, urlImages: "images/wheyprotein.jpg", altImages: "Bcaa", stock: 0}
                ])
            }, 2000)
        })
        promesa.then(res => setProductos(res))
    }, [])
    return (
        <>
            <div className="container containerListCart">
                <ItemCart titulo="Whey Protein" categoria="Whey" descripcion="La proteína whey es el suplemento proteico que se obtiene a partir del aislamiento del suero de la leche." precio="$2.000" images="images/wheyprotein.jpg" altImages="Whey Protein" stock="2" />
                <ItemCart titulo="Creatina" categoria="Creatina" descripcion="La creatina es una sustancia química que se encuentra naturalmente en el cuerpo." precio="$500" images="images/wheyprotein.jpg" altImages="Creatina" stock="4" />
                <ItemCart titulo="BCAA" categoria="BCAA" descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit." precio="$500" images="images/wheyprotein.jpg" altImages="Creatina" stock="0" />
            </div>
            <ItemList lista = {productos}/>
        </>
        
    )
} 
export default ItemListContainer;