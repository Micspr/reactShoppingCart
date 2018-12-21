import React, {Component} from 'react'

function CartItems(props) {
  return (
    <div className="container">
      <h1>Cart Items</h1>
          <div className="list-group">
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">Product</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-2">Quantity</div>
      </div>
    </div>
      { props.cartItems.map(item => 
          <div class="list-group-item">
            <div class="row">
              <div class="col-md-8">{item.product.name}</div>
              <div class="col-md-2">{item.product.priceInCents}</div>
              <div class="col-md-2">{item.quantity}</div>
            </div>
          </div>
      )}
  </div>
    </div>
  )
}

export default CartItems