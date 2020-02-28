import React from 'react';
import './App.css';
import TableComponent from "./components/TableComponent";

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
class App extends React.Component {
  handleOnRowChange(index, newValue) {
    console.log(index, newValue);
  }
  render() {
    return (
        <TableComponent data={data} onRowChange={(index, newValue) => this.handleOnRowChange(index, newValue)}/>
    );
  }
}

export default App;

