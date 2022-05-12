import { useState } from "react";
import {CartContext} from "../context/CartContext";

export const CustomContext = ({children})=> {
    const [productos, setProductos] = useState([]);
    const productosId = productos.map(producto => producto.id);
    
    const addProductos = (newProduct, count)=> {
        if(productosId.includes(newProduct.id)) {
            const newProducts = [...productos];
            const productIndex = newProducts.findIndex(prod=> prod.id === newProduct.id);
            newProducts[productIndex].count = newProducts[productIndex].count + count;
            setProductos(newProducts);
        } else {
            setProductos([...productos, newProduct]);
        }
    }
    const removeProduct = (objRemove)=> {
        const newCart = productos.filter(producto => producto.id !== objRemove);
        setProductos(newCart)
    }
    const cleanCart = () => {
        setProductos([])
    }
    const getTotalPrice = () =>{
        const totalPrice = productos.reduce((acc, obj) => acc+(obj.count*obj.precio), 0);
        console.log(totalPrice)
        return totalPrice;
    }
    const getTotalProducts = () => {
        return productos.length
    }
    
    return(
        <CartContext.Provider value={{productos, addProductos, removeProduct, cleanCart, getTotalPrice, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}