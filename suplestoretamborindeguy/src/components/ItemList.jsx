import React, {useState} from 'react'
import Item from './Item'
  
const ItemList = ({lista}) =>  {
    return (
      <div className='containerListCart container'>
        {lista.map(producto => <Item producto={producto}/>)}
      </div>  
    )
}
export default ItemList


