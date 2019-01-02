import React, {Component} from 'react'

class SubmitForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      product: '',
      quantity: 0
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.product, this.state.quantity)
  }

  handleProductsList = (e) => {
    this.setState({ product: e.target.value })
  }

  handleQuantity = (e) => {
    this.setState({quantity: e.target.value})
  }

  render() {
    let formList = this.props.products.map(product => {
      return (
        <option
          key={product.id}
          value={product.id}
        >
          {product.name}
        </option>
      )
    })
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <p>Quantity</p>
          <div className="row">
          <input type="text" name="itemQuantity" value={this.state.quantity} onChange={this.handleQuantity}/>
          </div>
          <p>Products</p>
          <div className="row">
          <select
              className="browser-default"
              value={this.state.product}
              onChange={this.handleProductsList}
            >
              <option disabled selected>Choose Product</option>
              {formList}
            </select>
            </div>
            <div className="row">
          <input type="submit" name="submitItem"/>
          </div>
        </form>
      </div>
    )
  }
}

export default SubmitForm