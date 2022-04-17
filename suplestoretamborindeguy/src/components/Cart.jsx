import React, {useState, useContext} from 'react';
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext';

const Cart = ({producto}) =>  {
    let {id, nombre, precio, urlImages, altImages, stock, count} = producto
    const [count2 ,setCount2] = useState(count)
    const valores = useContext(CartContext)
    const objRemove = {
        id
    }
    return (       
        <div className="item-cart">
            <img src={urlImages} alt={altImages} className="image-cart"/>
            <div className='d-flex w-100 mt-4 justify-content-between'>
                <h2 className="title-cart">{nombre}</h2> 
                <div className='d-flex justify-content-between'>
                    <div>
                        <ItemCount stock={stock} count={count2} setCount={setCount2} />
                        <p className="stock-cart">{stock} Disponibles</p> 
                    </div>     
                    <p className="precio-cart ml-5">${precio * count2}</p>
                </div>     
                <p onClick={()=>valores.removeProduct(objRemove)}>Agregar al Carrito</p>
            </div>
        </div>
    )
}

export default Cart;