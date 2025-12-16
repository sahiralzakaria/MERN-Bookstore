import './cart.css'

import { cartInfo } from '../../data/cart'

const Cart = () => {
    return (
        <div className="cart">
            <h1 className="cart-title">Your Shopping Cart</h1>
            <div className="cart-wrapper">
                <div className="cart-items">
                    {cartInfo.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img
                                src={`/books/${item.image}`}
                                alt={item.title}
                                className="cart-item-img"
                            />
                            <div className="cart-item-info">
                                <div>
                                    <div className="cart-item-book-title">
                                        <b>Title: </b>
                                        {item.title}
                                    </div>
                                    <div className="cart-item-author">
                                        <b>Author: </b>
                                        {item.author}
                                    </div>
                                </div>
                                <div>
                                    <div className="cart-item-quantity">
                                        <button
                                            className="bi bi-plus-lg"
                                        ></button>
                                        <b>{item.quantity}</b>
                                        <button
                                            disabled={item.quantity <= 1}
                                            className="bi bi-dash-lg"
                                        ></button>
                                    </div>
                                    <div className="cart-item-price">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                    <i
                                        className="bi bi-trash-fill"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Cart