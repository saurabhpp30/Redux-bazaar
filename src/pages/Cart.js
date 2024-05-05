import { useSelector } from "react-redux"
import { Cartlist } from "../Components"


export const Cart = () => {

  const products = useSelector(state => state.cartState.Cartlistitem)
  const totals = useSelector(state=> state.cartState.total)
  return (
    <div className="Cart">
      <h2> Cart items : {products.length} / ${totals}</h2>
      {products.map((product)=>(
        <Cartlist key={product.id} Cartlistproduct={product}/>
      ))}
    </div>
  )
}


