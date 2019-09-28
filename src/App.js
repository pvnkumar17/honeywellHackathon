import React,{Component,Fragment}from 'react';
import './App.css';
import axios from "axios";
import Header from './Header/Header';
import Device from './Device/Device';
import Footer from './Footer/Footer';
import Filter from './Filter/Filter';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
        deviceData:[],
        height:500,
        width:700,
        options:["Device1","Device2"],
        selectedOptions:"Device1"

    }
}
handleChange=(event)=>{
  debugger;
  let value = event.target.value;
  this.setState({
    selectedOptions:value
  });
}
componentDidMount(){
  const _this=this;
  
  const func=()=>{
    axios.get('./data.json')
    .then(function (response) {
      // handle success
      console.log(response);
      _this.setState({deviceData:response.data.data});
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
  setInterval(func,5000);
 
}
  render(){
    debugger
    const {deviceData,options,selectedOptions} =this.state;
    return (
      <Fragment>
        <Header />
        <Filter options={options} selectedOptions={selectedOptions} handleChange={this.handleChange}/>
        <h3 className="title">Bar Chart for {selectedOptions}</h3>
        <div className="container">
          {
            deviceData.length >0 && deviceData.map((item1,index)=>{
              if(item1.id.toLowerCase()===selectedOptions.toLowerCase()){
                return <Device key={index} data={item1} width={this.state.width} height={this.state.height}/>
              }
            })
          }
        </div>
        <Footer />
      </Fragment>        
    );
  }
}
