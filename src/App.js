import React from 'react';
import Table from './components/Table/Table';
import './App.css';

function App() {

  const columnlist= [
    {
      name: 'item',
      inputType: 'select'
    },
    {
      name: 'Material Fee',
      inputType: 'currency' 
    },
    {
      name: 'Packing Fee',
      inputType: 'text'
    },
    {
      name: 'Unpacking Fee',
      inputType: 'currency'
    }
  ]
  return (
    <div className="App">
      <Table columnlist={columnlist}/>
    </div>
  );
}

export default App;
