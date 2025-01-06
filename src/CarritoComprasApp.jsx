import { Navigate, Route, Routes } from "react-router"
import { NavBarComponent } from "./components/NavBarComponent"
import { ProductsPage } from "./pages/ProductsPage"
import { CartPage } from "./pages/CartPage"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/cartProvider"

export const CarritoComprasApp = () => {
    return (

        <ProductProvider>
            <CartProvider>
            <NavBarComponent />
            <div className="container">
                <Routes>

                    <Route path="/" element={<ProductsPage></ProductsPage>}></Route>
                    <Route path="/carrito" element={<CartPage></CartPage>}></Route>
                    <Route path="/*" element={<Navigate to='/' />}></Route>

                </Routes>

            </div>
            </CartProvider>
        </ProductProvider>

    )
}
