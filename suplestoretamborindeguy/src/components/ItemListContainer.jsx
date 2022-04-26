import React, {useState, useEffect} from 'react';
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../utils/firebase';
function ItemListContainer () {
    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams()

    function seteandoProductos(data) {
            if(!categoryId){
                setProductos(data) 
            } else {
               setProductos(data.filter(prod =>(prod.categoria === categoryId))) 
            }      
    }
    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db, 'items');
            const response = await getDocs(query);
            const dataItems = response.docs.map(doc=>{return {id: doc.id, ...doc.data()}});
            seteandoProductos(dataItems);
            
        }
        getData()
    },[categoryId])
    

    return (
        <>
            <ItemList lista = {productos}/>
        </>
        
    )
} 
export default ItemListContainer;