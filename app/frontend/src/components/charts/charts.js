// import React, {   useEffect, useState } from 'react';
// import '../../../node_modules/react-vis/dist/style.css';
import { getAllSongs } from "../../services/allsongs";
// import {XYPlot, LineSeries, VerticalBarSeries, LabelSeries} from 'react-vis';

// function Charts() {


//   const [histoData, setList] = useState([]);
  
//     useEffect(() => {
//       let mounted = true;
//       getAllSongs().then((items) => {
//         console.log(items);
//         if (mounted) {
//           setList(items["songs"]);
//           let i = 0;
//           for (const song in items['songs']) {
//             if (Object.hasOwnProperty.call(items['songs'], song)) {
//               const element = items['songs'][song];
//               i+=1
//               histoData.push({ x: i, y: parseInt(element['duration_ms'] / 10000) })
//               data.push({ x: i, y: parseInt(element['duration_ms']/10000) })
//             }
//           }
//           console.log(histoData)
          
//         }
//       });
//       return () => (mounted = false);
//     }, []);
  

//     const data = [
//       {x: 0, y: 8},
//       {x: 1, y: 5},
//       {x: 2, y: 4},
//       {x: 3, y: 9},
//       {x: 4, y: 1},
//       {x: 5, y: 7},
//       {x: 6, y: 6},
//       {x: 7, y: 3},
//       {x: 8, y: 2},
//       {x: 9, y: 0}
//     ];

//     const myData = [
//       {x: 0, y: 0, label: 'woah!', style: {fontSize: 10}},
//       {x: 1, y: 0, label: 'dope city', yOffset: 5},
//       {x: 0, y: 1, label: 'cool Dog friend', xOffset: 5, rotation: 34}
//     ]
  

//     return (
//     <>
//         {/* <XYPlot height={300} width={300}>
//           <LineSeries data={data} />
//         </XYPlot>

//         <XYPlot width={300} height={300}>
//           <LabelSeries
//             animation
//             allowOffsetToBeReversed
//             data={myData} />
//         </XYPlot> */}

//           {histoData.map((item) => (
//             <div key={item.id}>{item.duration_ms}</div>))}

//         {<XYPlot width={300} height={300}>
//           <VerticalBarSeries data={data} />
//         </XYPlot>}
//       </>
//     );
  
// }

import React from 'react';
import {AreaSeries, HorizontalBarSeries, XAxis, XYPlot, YAxis} from 'react-vis';

// range constants
const VERY_LOW_RANGE = [0, 0.08];
const LOW_RANGE = [0, 0.7];
const HIGH_RANGE = [0.7, Infinity];

export const BARCHART_FEATURES = [
  {min: -Infinity, max: Infinity, name: 'xaxis', group: 0},
  {min: VERY_LOW_RANGE[0], max: VERY_LOW_RANGE[1], name: 'yaxis', group: 1},
  {min: LOW_RANGE[0], max: LOW_RANGE[1], name: 'bars', group: 2},
  {min: HIGH_RANGE[0], max: HIGH_RANGE[1], name: 'area', group: 2}
];

function updateDataForArea(data, ppp) {
  // Use the PPP ratio as the step to sample the data
  let histoData = []
  getAllSongs().then((items) => {
    console.log(items);
           
    let i = 0;
    for (const song in items['songs']) {
      if (Object.hasOwnProperty.call(items['songs'], song)) {
        const element = items['songs'][song];
        i += 1
        histoData.push({ x: i, y: parseInt(element['duration_ms'] / 10000) })
        // data.push({ x: i, y: parseInt(element['duration_ms'] / 10000) })
      }
    }
    console.log(histoData)
              
  }
  );
  return histoData; // [{x: 1, y:5}, {x: 2, y:3}];
}

export default function ResponsiveBarChart(props) {
  const {data, height, margin, width} = props;

  const updatedData = updateDataForArea(100, 300)

  return (
    <div className="responsive-bar-chart">
      <XYPlot
        yType="ordinal"
        xType="linear"
        margin={2}
        height={1000}
        width={1000}
      >
        {/* {featuresToRender.xaxis && <XAxis orientation="top" />}
        {featuresToRender.yaxis && <YAxis />} */}
        {true && (
          <HorizontalBarSeries
            colorType="literal"
            yRange={[0, 500]}
            xRange={[0, 110]}
            data={updatedData}
          />
        )}
        {/* {featuresToRender.area && (
          <AreaSeries
            colorType="literal"
            color="#12939A"
            yType="linear"
            yDomain={[0, updatedData.length]}
            yRange={[0, innerHeight]}
            xRange={[innerWidth, 0]}
            data={updatedData}
          />
        )} */}
      </XYPlot>
    </div>
  );
}


// export default Charts;