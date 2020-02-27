import React from 'react';
import './App.css';
import TableComponent from "./components/TableComponent";

function App() {
  const data = [
    {
      value1: '1',
      value2: '2',
      value3: '3'
    },
    {
      value1: '1',
      value2: '2',
      value3: '3'
    },
    {
      value1: '1',
      value2: '2',
      value3: '3'
    },
  ];
  return (
      <TableComponent data={data}/>
  );
}

export default App;
