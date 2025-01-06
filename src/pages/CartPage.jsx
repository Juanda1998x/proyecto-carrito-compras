import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Key } from "@mui/icons-material"
import Swal from "sweetalert2"

export const CartPage = () => {

  const { shoppingList, removeProduct, increment, decrement } = useContext(CartContext)

  const calculateTotal = () => {
    return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  }

  const comprar = () => {

    const productsPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n')

    Swal.fire({
      icon: 'success',
      title : 'compra realizada',
      html: `<p>haz comprado</p> <pre>${productsPurchased}</pre>`
    })

  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">precio</th>
            <th scope="col">cantidad</th>
            <th scope="col">eliminar</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map(product => (

            <tr key={product.title}>
              <th scope="row">{product.title}</th>
              <td>{product.price}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => decrement(product.id)}
                >-</button>
                <button
                  className="btn btn-primary"

                >{product.quantity}</button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => increment(product.id)}
                >+</button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeProduct(product.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th> <b>TOTAL : </b></th>
            <td></td>
            <td></td>
            <td>{calculateTotal()}</td>
          </tr>

        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button" onClick={comprar}>Comprar</button>

      </div>
    </>
  )
}
