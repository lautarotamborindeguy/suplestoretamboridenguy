import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../utils/firebase';

function ItemDetailContainer () {
    
    const [producto, setProducto] = useState([])
    const {itemId} = useParams()
    
    function seteandoProductos(data) {
        setProducto(data.find(prod =>(prod.id === itemId)))
    }
    
    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db, 'items');
            const response = await getDocs(query);
            const dataItems = response.docs.map(doc=>{return {id: doc.id, ...doc.data()}});
            seteandoProductos(dataItems);
        }
        getData()
    },[itemId])
    return (
        <div className="container">
            {
              producto ==! {} ? <div className='container-loading'><p className='loading-product'>Cargando Producto</p><div class="preloader"> </div> </div>  : <ItemDetail producto={producto}/>
            }
            
        </div>
    )
} 
export default ItemDetailContainer;