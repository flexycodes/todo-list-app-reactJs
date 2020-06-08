import React, { Component } from 'react';
import './App.css';
import ListItems from './components/ListItems/ListItems';
import AddItem from './components/AddItem/AddItem';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        items: [
            {id:1, name:'Jhon', age:22},
            {id:2, name:'Ronaldo', age:31},
            {id:3, name:'Robert', age:33},
            {id:4, name:'Mary', age:45},
            {id:5, name:'Alex', age:18},
        ]
      }
  }

  deleteItem = (id) => {
    let {items} = this.state
    const result = items.filter(item => item.id !== id);
    this.setState({
      items:result
    })
  }

  addItem = (item) => {
    let {items} = this.state
    item.id = Math.floor(Math.random() * Math.floor(100))
    items.push(item)
    
    this.setState({
      items
    })
  }

  render(){
    return (
      <div className="App">
        <AddItem items={this.state.items} addItem={this.addItem} />
        <ListItems items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
