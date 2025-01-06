import React, { useReducer } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({ children }) => {

    const initialState = []

    const shoppingReducer = (state = initialState, action = {}) => {

        switch (action.type) {
            case '[CART] Add':

                return [...state, action.payload]
            case '[CART] Remove':

                return state.filter(product => product.id !== action.payload)
            case '[CART] Increment':

                return state.map(product => {
                    const cant = product.quantity + 1
                    if (product.id === action.payload) return { ...product, quantity: cant }
                    return product

                })
            case '[CART] Decrement':
                return state.map(product => {
                    const cant = product.quantity -1
                    if (product.id === action.payload && product.quantity > 1) return { ...product, quantity: cant }
                    return product

                })
            default:
                return state;
        }

    }

    const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState)

    const addProduct = (product) => {
        product.quantity = 1
        const action = {
            type: '[CART] Add',
            payload: product
        }
        dispatch(action)

    }
    const removeProduct = (id) => {
        const action = {
            type: '[CART] Remove',
            payload: id
        }
        dispatch(action)
    }
    const increment = (id) => {
        const action = {
            type: '[CART] Increment',
            payload: id
        }
        dispatch(action)

    }
    const decrement = (id) => {
        const action = {
            type: '[CART] Decrement',
            payload: id
        }
        dispatch(action)

    }

    return (
        <CartContext.Provider value={{ shoppingList, addProduct, removeProduct, increment, decrement }}>
            {children}
        </CartContext.Provider>
    )
}
