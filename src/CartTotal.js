import React, {Component} from 'react'

class CartTotal extends Component {
  constructor(props){
    super(props)
  }

  totalPrice = () => Number.parseFloat(this.props.cartItemsList.reduce((acc, curr) => acc + curr.product.priceInCents * curr.quantity, 0)/100).toFixed(2)

  render() {
    return (
      <div className = "container">
        <p>Total Price: ${this.totalPrice()}</p>
      </div>
    )
  }
}

export default CartTotal