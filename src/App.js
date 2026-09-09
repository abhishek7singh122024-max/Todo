import React from 'react';

import Header from './components/Header'; 
import Todoitem from './components/Todoitem';
import Button from './components/Button';
import Item from './components/items';
import Study from './components/Sutdy';
import Codax from './components/Codax';
import Names from './components/Repeat';
import Apla from './components/Apla';
import './style.css';

const App = () => {
  return(
    <div className='todo-container'>
      <Header/>
      <Todoitem/>
      <Item/>
      <Study/>
      <Codax/>
      <Apla/>
      <Button/>
    </div> 
  );
};

export default App;

