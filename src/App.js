// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
// import '../data/iris.json';
import '../node_modules/react-vis/dist/style.css';
import '../node_modules/react-vis/dist/styles/legends.scss';

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries,VerticalGridLines,VerticalBarSeries} from 'react-vis';


class App extends Component {



  render() {
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];

    const data2 = 'iris.json' ;

    return (
      <div className="App">
        <XYPlot height={300} width= {300}>
            <VerticalBarSeries data={data} />
            <XAxis />
            <YAxis />
        </XYPlot>
        <XYPlot height={200} width={500}>
            <LineSeries data={data} color = "blue"/>
        </XYPlot>
      </div>
    );
  }
}

export default App;


