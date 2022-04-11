import { useState } from "react";
import {CartContext} from "../context/CartContext";

export const CustomContext = ({children})=> {
    const [productos, setProductos] = useState([]);
    const productosId = productos.map(producto => producto.id);
    
    const addProductos = (newProduct)=> {
        if(productosId.includes(newProduct.id)) {
            
        } else {
            setProductos([...productos, newProduct]);
        }
        
    }
    
    return(
        <CartContext.Provider value={{productos, addProductos}}>
            {children}
        </CartContext.Provider>
    )
}