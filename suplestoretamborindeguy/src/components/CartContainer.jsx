import { useContext } from "react";
import {CartContext} from "../context/CartContext";
import Cart from "./Cart";

const CartContainer = () =>  {
    const valores = useContext(CartContext);
    let productosContexto = valores.productos
    
    return (
        <div className='containerListCart container'>
          {productosContexto.map(producto => <Cart producto={producto}/>)}
        </div>  
    )
}

export default CartContainer;