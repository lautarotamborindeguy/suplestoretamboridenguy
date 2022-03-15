import React from 'react'
import Item from './Item'
  
const ItemList = ({lista}) =>  {
    return (
      <div>
        {console.log(lista)}
        {lista.map(producto => <Item titulo={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} images={producto.urlImages} altImages={producto.altImages} stock={producto.stock} />)}
      </div>  
    )
}
export default ItemList


