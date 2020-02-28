import React from 'react';
import './App.css';
import TableComponent from "./components/TableComponent";

function App() {
  const data = [
    {
      value1: '11',
      value2: '12',
      value3: '13'
    },
    {
      value1: '21',
      value2: '22',
      value3: '23'
    },
    {
      value1: '31',
      value2: '32',
      value3: '33'
    },
  ];
  return (
      <TableComponent data={data}/>
  );
}

export default App;
