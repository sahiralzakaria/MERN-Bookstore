import React from 'react'
import { cartInfo } from '../../data/cart';

const OrderSummary = () => {
    const totlaPrice = cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2);
    return (
        <div className="cart-order-summary">
            <h5 className="order-summary-title">ORDER SUMMARY</h5>
            <div className="order-summary-item">
                <span>Subtotal</span>
                <span>
                    $
                    {totlaPrice}
                </span>
            </div>
            <div className="order-summary-item">
                <span>Shipping Cost</span>
                <span>0</span>
            </div>
            <div className="order-summary-item">
                <span>Discount</span>
                <span>0</span>
            </div>
            <div className="order-summary-item">
                <strong>Total</strong>
                <span>
                    $
                    {totlaPrice}
                </span>
            </div>
        </div>
    )
}

export default OrderSummary