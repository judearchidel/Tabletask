import React from 'react';
import Table from './components/Table/Table';
import './App.css';

function App() {

  const columnlist= [
    {
      name: 'Item',
      inputType: 'select'
    },
    {
      name: 'Material Fee',
      inputType: 'currency' 
    },
    {
      name: 'Packing Fee',
      inputType: 'currency'
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
