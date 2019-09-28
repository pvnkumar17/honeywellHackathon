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
        options:[1,2,3],
        selectedOptions:1

    }
}
handleChange=(event)=>{
    let value = event.target.value;
    console.log("selected",value);
  this.setState({
    selectedOptions:value
  });
}
componentDidMount(){
    const _this = this;

  /*let optionArr=[];
    axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response);
      response.data.forEach((item)=>{
        optionArr.push(item.id);
      })
      _this.setState({options:optionArr});
    }) */
    const func = () => {
      let url = "http://localhost:8080/boiler/" + _this.state.selectedOptions + "/10";
    // axios.get('./data.json')
      axios.get(url)
    .then(function (response) {
      // handle success
      /*console.log(response);*/
      _this.setState({deviceData:response.data});
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
  setInterval(func,3000);
 
}
  render(){
    const {deviceData,options,selectedOptions} =this.state;
    return (
      <Fragment>
        <Header />
        <Filter options={options} selectedOptions={selectedOptions} handleChange={this.handleChange}/>
            <h3 className="title">Bar Chart for Device {" "}{selectedOptions}</h3>
        <div className="container">
          {
                    deviceData.length > 0 && deviceData.map((item1, index) => {
                        debugger;
              if(item1.id[0]+""===selectedOptions+""){
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
