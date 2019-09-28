import React,{Component}from 'react';
import './Device.css';
import BarChart from '../components/barChart';

export default class Device extends Component {
    state = {
        data: this.props.data || [50, 60, 60, 60, 90, 70, 50, 55, 60, 52.5]
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            const data = nextProps.data;
            this.setState({ data })
        }
    }
    render() {

        const { data } = this.state;
    const {width,height}= this.props;
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