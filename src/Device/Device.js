import React,{Component}from 'react';
import './Device.css';
import BarChart from '../components/barChart';

export default class Device extends Component {
  render(){
    debugger;
    const {data,width,height}= this.props;
    if(data){
        return (
          <div className="deviceBody">
            <BarChart data={data.temperature} width={width} height={height} id="temperature"/>
            <BarChart data={data.pressure} width={width} height={height} id="pressure"/>
            <h4>Temperature</h4>
            <div id ="temperature"></div>
            <h4>Pressure</h4>
            <div id ="pressure"></div>
          </div>
        );
  } 
  else{
    return null;
  }
}
}