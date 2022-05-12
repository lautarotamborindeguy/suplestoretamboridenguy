import React, { useContext} from 'react';
import { CartContext } from '../context/CartContext';

const Cart = ({producto}) =>  {
    let {id, nombre, precio, urlImages, stock, count} = producto
    const valores = useContext(CartContext)
    
    return (       
        
        <div className="item-cart">
            <img src={urlImages} className="image-cart"/>
            <div className='d-flex w-100 mt-4 justify-content-between'>
                <h2 className="title-cart">{nombre}</h2> 
                    <div>
                        <p className='solicitadas-cart'>{count} Solicitadas</p>
                        <p className="stock-cart">{stock} Disponibles</p> 
                    </div>     
                    <p className="precio-cart ml-5">${precio * count}</p>    
                <p className="btn-remove"onClick={()=>valores.removeProduct(id)}><i class="bi bi-trash3-fill"></i></p>
            </div>
        </div>
    )
}

export default Cart;