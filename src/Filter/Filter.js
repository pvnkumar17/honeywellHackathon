import React,{Component}from 'react';
import './Filter.css';

export default class Filter extends Component {
render() {
  const {options,selectedOptions,handleChange}=this.props;
  return (
      <div className="filter">
          <select className="select-text" ref="selectedOptions" onChange={(e) => handleChange(e)}>
          {options.map((item,index)=>{
              return <option id={item} key={index} value={item}>{item}</option>
          })}
          </select>
      </div>
  )
}
}