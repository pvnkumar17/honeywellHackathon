import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {

    state = {
        data: this.props.data || [50, 60, 60, 60, 90, 70, 50, 55, 60, 52.5]
    }
    componentDidMount() {
        this.drawChart(this.state.data);
    }

    getDerivedStateFromProps(){

    }

    componentWillReceiveProps(nextProps, prevProps) {
        if(nextProps != prevProps) {
            const data = nextProps.data;
            this.setState({data})
        }
    }
    drawChart(data) {
        const {width, height, id} = this.props;
        const scale = 65;
        const margin = ({top: 20, right: 40, bottom: 25, left: 20})
        const svg = d3.select(`#${id}`).append("svg")
            .attr("width", width)
            .attr("height", height);

        svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * scale + 20)
        .attr("y", (d, i) => height - 5 * d -25)
        .attr("width", scale-5)
        .attr("height", (d, i) => d * 5)
        .attr("fill", (d) =>{
            if(d >= 90){
                return "red";
            }else if(d >= 70 && d < 90){
                return "orange";
            }else {
                 return "green"
                }
            });

        svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(d => d)
        .attr("x", (d, i) => i*scale + 25)
        .attr("y", (d, i) => height - (5*d) - 28);
       
        
       
    let x = d3.scaleLinear()
        .domain([0, 300])
        .range([margin.left, width - margin.right]);
    let y = d3.scaleLinear()
        .range([height - margin.bottom, margin.top]);
    let yAxis = g => g
        .attr("transform", `translate(${margin.left - 6},0)`)
        .call(d3.axisLeft(y.copy().interpolate(d3.interpolateRound)))
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
        .attr("stroke-opacity", 0.1)
        .attr("x1", width))
        .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("temp"));
    let xAxis = g => g
            .attr("transform", `translate(0,${height - margin.bottom + 6})`)
            .call(d3.axisBottom(x.copy().interpolate(d3.interpolateRound)).ticks(null, "+f"))
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").clone()
            .attr("stroke-opacity", 0.1)
            .attr("y1", -height))
            .call(g => g.append("text")
            .attr("x", width - margin.right)
            .attr("y", -3)
            .attr("fill", "currentColor")
            .attr("font-weight", "bold")
            .text("time"));

        svg.append("g")
            .call(xAxis);
      
        svg.append("g")
            .call(yAxis);     
      }
      render(){
        return <div>
        </div>
      }
}

BarChart.defaultProps = {
    width: 800,
    height: 600
}

export default BarChart;