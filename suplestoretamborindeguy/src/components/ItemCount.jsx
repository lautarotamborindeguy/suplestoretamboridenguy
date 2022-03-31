import { Link } from 'react-router-dom'

export default function ItemCount (props)  {
    let {stock, count, setCount, enviarCarrito} = props
    

    const chequeoStockSuma=()=> {   
        if(stock > count) {
            setCount(count + 1)
        }
    }
    const chequeoStockResta=()=> {
        if(count > 0) {
            setCount(count - 1)
        }
    }
    return (
       <div>    
                <div className="counter">
                    <div className="minus" onClick={chequeoStockResta}>
                        <div className="line"></div>
                    </div>
                    <div className="number">
                        <span className="fadeIn">{count}</span> 
                    </div>
                    <div className="plus" onClick={chequeoStockSuma} >
                        <div className="line-h"></div>
                        <div className="line-v"></div>
                    </div>
                </div>
                <Link to={`/cart`}><p className="btn btn-success mt-5" onClick={enviarCarrito}>Agregar al Carrito</p></Link>
            
       </div>
    )
}
