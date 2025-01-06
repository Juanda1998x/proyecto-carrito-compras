
import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { useContext } from "react"
import { NavLink } from "react-router"
import { CartContext } from "../context/CartContext"
import '../styles/NavBar.css';

export const NavBarComponent = () => {

    const { shoppingList } = useContext(CartContext);

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to={'/'} className="navbar-brand" >SUPERCOMPRAS</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link " aria-current="page" >Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/carrito'} className="nav-link " aria-current="page" >carrito</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to={'/carrito'} className="carritoCompras">

                    <Badge badgeContent={shoppingList.length} color="primary" >
                        <ShoppingCart />
                    </Badge>

                </NavLink>
            </div>
        </nav>
    )
}
