import React, {Component} from 'react'

class CartTotal extends Component {
  constructor(props){
    super(props)
  }

  totalPrice = () => {
    let total = 0

    this.props.cartItemsList.map(ele => total += ele.product.priceInCents * ele.quantity)

    total = Number.parseFloat(total/100).toFixed(2)

    return total
  }

  render() {
    return (
      <div className = "container">
        <p>Total Price: ${this.totalPrice()}</p>
      </div>
    )
  }
}

export default CartTotal