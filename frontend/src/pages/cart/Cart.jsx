import './cart.css'

import { cartInfo } from '../../data/cart'
import OrderSummary from './OrderSummary'
import CartItem from './CartItem'

const Cart = () => {
    return (
        <div className="cart">
            <h1 className="cart-title">Your Shopping Cart</h1>
            <div className="cart-wrapper">
                <div className="cart-items">
                    {cartInfo.map((item) => (
                        <CartItem key={item.id} item={item} />

                    ))}
                </div>

                <OrderSummary />
            </div>
        </div>
    )
}

export default Cart