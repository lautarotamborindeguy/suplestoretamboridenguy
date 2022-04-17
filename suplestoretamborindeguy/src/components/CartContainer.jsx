import { useContext } from "react";
import {CartContext} from "../context/CartContext";
import Cart from "./Cart";

const CartContainer = () =>  {
    const valores = useContext(CartContext);
    let productosContexto = valores.productos
  
    return (
        <div className='container container-cart'>
          {productosContexto.map(producto => <Cart producto={producto}/>)}
          <br />
        </div>  
    )
}

export default CartContainer;