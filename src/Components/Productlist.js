import { useDispatch, useSelector } from "react-redux"
import { add, remove } from "../store/cartSlice"
import { useEffect, useState } from "react"
export const Productlist = ({ listproduct }) => {
  const { id, name, price, image } = listproduct
  const dispatch = useDispatch()
  const Cartitems = useSelector(state => state.cartState.Cartlistitem)
  const [Buttonstate, setbuttonstate] = useState(false)
  useEffect(() => {
    const Productincart = Cartitems.find(items => id === items.id)
    if (Productincart) {
      setbuttonstate(true)
    }
    else {
      setbuttonstate(false)
    }
  }, [Cartitems, id])
  return (
    <div className="Productlist">
      <img src={image} alt="logo" className="logo" />
      <div className="Product-info">
        <h2>{name}</h2>
        <div>
          <p>${price}</p>
          {Buttonstate ? <button onClick={() => dispatch(remove(listproduct))} >remove</button> : <button onClick={() => dispatch(add(listproduct))} >add to cart</button>}
        </div>
      </div>
    </div>
  )
}


