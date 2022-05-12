import { useContext } from "react";
import {CartContext} from "../context/CartContext";
import { db } from "../utils/firebase"
import Cart from "./Cart";
import {Link} from 'react-router-dom';
import { addDoc, collection, Timestamp } from "firebase/firestore";

const CartContainer = () =>  {
    const valores = useContext(CartContext);
    let productosContexto = valores.productos
    console.log(valores.productos)
    const sendOrder = async (e) => {
      e.preventDefault()
      const name = e.target[0].value;
      const phone = e.target[1].value;
      const email = e.target[2].value;
      
      const newOrder = {
        buyer: {
          name: name,
          phone: phone,
          email: email
        },
        items : productosContexto,
        total: valores.getTotalPrice(),
        date: Timestamp.fromDate(new Date())
      }
      console.log(newOrder)
      if(newOrder.items.length > 0) {
        const ordersCollection = collection(db, 'orders');
        const docReference = await addDoc(ordersCollection, newOrder);
        const idReference = docReference._key.path.segments[1];
        valores.cleanCart()
        return alert(`Se ha creado tu orden de compra, tiene el ID ${idReference}`)
      } else {
        return alert("Su carrito está vacío, debe agregar productos")
      }
      

    }
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
          <form onSubmit={sendOrder} className="pb-3">
            <label for="inputName" class="form-label mb-0 ps-1">Name</label>
            <input type="text" id="inputName" class="form-control w-50" required/>
            
            <label for="inputPhone" class="form-label mb-0 ps-1 mt-3">Número de Telefono</label>
            <input type="number" id="inputPhone" class="form-control w-50" required/>
            
            <label for="inputEmail" class="form-label mb-0 ps-1 mt-3">Email</label>
            <input type="email" id="inputEmail" class="form-control w-50" required/>
            <button type="submit" className="btn btn-primary mt-4" >Comprar</button>
          </form>
          
        </div>
    )
}

export default CartContainer;