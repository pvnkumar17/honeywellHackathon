import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
    componentDidMount() {
        this.drawChart();
    }
    drawChart() {
        const {data, width, height} = this.props;    
        const svg = d3.select("#barChart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("margin-left", 100, "border", "1px solid #000000");
                    
        svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => height - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "green");

        svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(d => d)
        .attr("x", (d, i) => i*70)
        .attr("y", (d, i) => height - (10*d) - 3);
        
      }
      render(){
        return <div id={"#" + this.props.id}></div>
      }
}

BarChart.defaultProps = {
    width: 800,
    height: 600
}

export default BarChart;