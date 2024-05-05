import { Link, NavLink } from 'react-router-dom'
import logo from "../asset/logo.jpeg"
import { useSelector } from 'react-redux'
export const Header = () => {
    const cartnumber = useSelector(state => state.cartState.Cartlistitem)
    return (
        <header>
            <div>
                <Link to="/" className='logo' >
                    <img src={logo} alt='sau' />
                    <span> TradeMart</span>
                </Link>
            </div>
            <div className='List'>
                    <ul>
                        <li>
                            <NavLink to="/" className="navlink">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className='navlink'>Cart</NavLink>
                        </li>
                    </ul>
            
            </div>
            <div>
                <span>Cart : {cartnumber.length} </span>
            </div>
        </header>

    )
}


