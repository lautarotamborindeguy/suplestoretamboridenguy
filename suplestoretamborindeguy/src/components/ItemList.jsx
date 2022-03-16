import React from 'react'
import Item from './Item'
  
const ItemList = ({lista}) =>  {
    return (
      <div>
        {lista.map(producto => <Item producto={producto}/>)}
      </div>  
    )
}
export default ItemList


