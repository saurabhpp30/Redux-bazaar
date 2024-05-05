import {remove} from "../store/cartSlice"
import { useDispatch } from "react-redux"


export const Cartlist = ({ Cartlistproduct }) => {
   const dispatch = useDispatch()
    const { name, price, image } = Cartlistproduct
         return (
        <div className="Cart-List">
            <img src={image} alt="logo" className="logo" />
            <h4>{name} </h4>
            <div>
                <p>${price}</p>
                <button onClick={()=> dispatch(remove(Cartlistproduct)) } >remove</button>
            </div>
        </div>
    )
}


