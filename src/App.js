import React, { useState } from 'react';
import './App.css';
import ListItems from './components/ListItems/ListItems';
import AddItem from './components/AddItem/AddItem';

let App = () => {

  const [items, setItem] = useState({
    items: [
        {id:1, name:'Jhon', age:22},
        {id:2, name:'Ronaldo', age:31},
        {id:3, name:'Robert', age:33},
        {id:4, name:'Mary', age:45},
        {id:5, name:'Alex', age:18},
    ]
  });

  let deleteItem = (id) => {

    let listitems = items.items
  
    const newItems = listitems.filter(item => item.id !== id);
    setItem({
      items:newItems
    });
  }

  let addItem = (item) => {
    const newItems = items.items;

    item.id = Math.floor(Math.random() * Math.floor(100)) + 5

    newItems.push(item)
    setItem({
      items:newItems
    });
  }

  return (
    <div className="App">
      <AddItem items={items} addItem={addItem} />
      <ListItems items={items.items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
