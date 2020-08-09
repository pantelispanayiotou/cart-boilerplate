import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Catalog from './components/Catalog';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Catalog />
    </div>
  );
}

export default App;
