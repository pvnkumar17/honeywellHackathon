import React from 'react';
import './App.css';
import * as Data from "./data";
import BarChart from './components/barChart';

class App extends React.Component {

  state = {
    data: Data.data[0],
    width: 700,
    height: 500
  }
  render(){
    return (
      <div className="App">
        <BarChart data={this.state.data.temperature} width={this.state.width} height={this.state.height} id = "temperature" />
        <BarChart data={this.state.data.pressure} width={this.state.width} height={this.state.height} id = "temperature" />
        <div id ="temperature"></div>
        <div id ="pressure"></div>
      </div>
    );
  }
}

export default App;
