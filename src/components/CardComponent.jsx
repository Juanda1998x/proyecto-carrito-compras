import { useContext, useEffect, useState } from 'react';
import '../styles/CardComponent.css';
import { CartContext } from '../context/CartContext';
export const CardComponent = ({id, image, title, description, price, handlerAdd, handlerRemove }) => {


    const [added, setAdded] = useState(false)
    const {shoppingList} = useContext(CartContext);

    const check = ()=>{
        const boolean = shoppingList.some(product => product.id == id)
        setAdded(boolean)
    }

    useEffect(() => {
    
      check()
    }, [])
    

    const addProduct = () =>{
        handlerAdd()
        setAdded(true)
    }

    const removeProduct = () =>{
        handlerRemove()
        setAdded(false)
    }
    


    return (

        <>
            <div className="card" >

                <img src={image} alt={title} className="card-image" />
                <div className="card-content">

                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                    <p className="card-price">{price}</p>

                    {
                        added ? < button type='button' className='remove' onClick={removeProduct}>
                            Quitar
                        </button>
                            :
                            < button type='button ' className='add' onClick={addProduct}>
                                Agregar
                            </button>
                    }

                </div>


            </div>

        </>
    )
}
