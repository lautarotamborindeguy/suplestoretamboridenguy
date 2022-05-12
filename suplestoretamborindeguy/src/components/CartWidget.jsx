import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget () {
    const valores = useContext(CartContext);
    return (
        <div className='d-flex'>
            <i class="bi bi-cart2"></i>
            {
              valores.getTotalProducts() === 0 ? '' : valores.getTotalProducts()
            }
        </div>

    )
}
export default CartWidget;