import { useContext } from "react";
import {CartContext} from "../context/CartContext";
import Cart from "./Cart";
import {Link} from 'react-router-dom';

const CartContainer = () =>  {
    const valores = useContext(CartContext);
    let productosContexto = valores.productos
   
    return (
        <div className='container container-cart'>
          {
            productosContexto.length > 0 ?
            productosContexto.map(producto => <Cart producto={producto}/>)
            : <p className="cart-empty">Su carrito no contiene ningún producto</p>
          }
          <br />
          {
            productosContexto.length > 0 ?
            <p onClick={()=>valores.cleanCart()} className="clean-cart">Eliminar carrito</p> : <Link to="/" className="clean-cart">Volver al Inicio</Link>
          }
          <p className="total-price">Total: {valores.getTotalPrice()}</p>
        </div>  
    )
}

export default CartContainer;