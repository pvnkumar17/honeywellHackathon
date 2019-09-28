import React from 'react';
import './App.css';
import BarChart from './components/barChart';

class App extends React.Component {

  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500
  }
  render(){
    return (
      <div className="App">
        <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
        <div id ="barChart"></div>
      </div>
    );
  }
}

export default App;
