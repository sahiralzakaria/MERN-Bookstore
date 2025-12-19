import React from 'react'

const CartItem = ({ item }) => {
    const { image, title, author, quantity, price } = item
    return (
        <div className="cart-item">
            <img
                src={`/books/${image}`}
                alt={title}
                className="cart-item-img"
            />
            <div className="cart-item-info">
                <div>
                    <div className="cart-item-book-title">
                        <b>Title: </b>
                        {title}
                    </div>
                    <div className="cart-item-author">
                        <b>Author: </b>
                        {author}
                    </div>
                </div>
                <div>
                    <div className="cart-item-quantity">
                        <button
                            className="bi bi-plus-lg"
                        ></button>
                        <b>{quantity}</b>
                        <button
                            disabled={quantity <= 1}
                            className="bi bi-dash-lg"
                        ></button>
                    </div>
                    <div className="cart-item-price">
                        ${(price * quantity).toFixed(2)}
                    </div>
                    <i
                        className="bi bi-trash-fill"
                    ></i>
                </div>
            </div>
        </div>
    )
}

export default CartItem