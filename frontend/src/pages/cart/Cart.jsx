import './cart.css'
import OrderSummary from './OrderSummary'
import CartItem from './CartItem'
import { useContext } from 'react'
import CartContext from '../../context/cartContext'

const Cart = () => {

    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const totlaPrice = cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2);

    return (
        <div className="cart">
            <h1 className="cart-title">Your Shopping Cart</h1>
            <div className="cart-wrapper">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} addToCart={addToCart} />

                    ))}
                </div>

                <OrderSummary totlaPrice={totlaPrice} />
            </div>
        </div>
    )
}

export default Cart