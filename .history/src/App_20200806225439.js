import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Catalog from './components/Catalog';
import Cover from './components/Cover';
function App() {
  return (
    <div className="App">
      <Menu />
      <Catalog />
    </div>
  );
}

export default App;
