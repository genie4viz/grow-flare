import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

const GaugeGraph = ({percent}) => {
  const graphRef = useRef();
  const width = 300, height = 200, radius = Math.min(width, height) * 0.4;
  
  return (
    <svg width={width} height={height}>
      <g ref={graphRef} transform={`translate(${width / 2}, ${height /2})`}/>
    </svg>
  );
};
export default GaugeGraph;
