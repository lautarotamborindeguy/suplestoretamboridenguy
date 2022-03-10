import React, {useState} from 'react'

export default function ItemCount (props)  {
    let {stock} = props
    const [count,setCount] = useState(0)

    const chequeoStockSuma=()=> {
        
        if(props.stock > count) {
            setCount(count + 1)
        }
    }
    const chequeoStockResta=()=> {
        if(props.stock >= count && count > 0) {
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
            
       </div>
    )
}
