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
    const removeProduct = (objRemove)=> {
        for (let i = 0; i < productos.length; i++) {
            const element = productos[i];
            if(element.id === objRemove.id) {
                productos.splice(i, 1);
            }
        }
    }
    return(
        <CartContext.Provider value={{productos, addProductos, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}