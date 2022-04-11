import React, {useState, useEffect} from 'react'
import ItemCart from "./ItemCart";
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';
function ItemListContainer () {
    const [productos, setProductos] = useState([])

    
    const {categoryId} = useParams()
    const APIURL = 'https://raw.githubusercontent.com/lautarotamborindeguy/lautarotamborindeguy.github.io/main/suplestore/productos.json'; 
    
    function seteandoProductos(api) {
        fetch(`${api}`)
        .then((resultado)=>{ return resultado.json()})
        .then((res) =>  {
            if(!categoryId){
                setProductos(res) 
            } else {
               setProductos(res.filter(prod =>(prod.categoria === categoryId))) 
            }
            
        })        
    }
    useEffect(() =>{
        setTimeout(() => {
            seteandoProductos(APIURL)
        }, 500)
    }, [categoryId])
    
    return (
        <>
            <ItemList lista = {productos}/>
        </>
        
    )
} 
export default ItemListContainer;