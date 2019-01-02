import React, { Component } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import CartItems from './CartItems'
import SubmitForm from './Form'
import CartTotal from './CartTotal'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      cartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
    }

    
  }
    addItem = (itemID, quantity) => {
      const foundItem = this.state.products.findIndex(ele => ele.id.toString() === itemID)

      if(foundItem === -1)
        return
        
      const newItem = {id: this.state.cartItemsList.length - 1, product: this.state.products[foundItem], quantity}

      this.setState({
        cartItemsList: [...this.state.cartItemsList, newItem]
      })
    }

  render() {
    return (
      <div className="App">
        <NavBar />
        <CartItems cartItems={this.state.cartItemsList}/>
        <CartTotal cartItemsList={this.state.cartItemsList}/>
        <SubmitForm products={this.state.products} addItem ={this.addItem}/>
        <Footer copyright={'2016'}/>
      </div>
    );
  }
}

export default App;
