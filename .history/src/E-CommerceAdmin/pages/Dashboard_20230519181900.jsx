/** @format */

import HOC from "../layout/HOC";
import img from '../../Images/Uploading-pana 1.png'
import img1 from '../../Images/Group 201.png'
import img2 from '../../Images/Group 203.png'
import img3 from '../../Images/Health professional team-pana 1.png'
import img4 from '../../Images/storyboard 1.png'
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Dashboard = () => {


  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
   
    axisY: {
      suffix: "%"
    },
    axisX: {
      prefix: "W",
      interval: 2
    },
    data: [{
      type: "line",
      toolTipContent: "Week {x}: {y}%",
      dataPoints: [
        { x: 1, y: 64 },
        { x: 2, y: 61 },
        { x: 3, y: 64 },
        { x: 4, y: 62 },
        { x: 5, y: 64 },
        { x: 6, y: 60 },
        { x: 7, y: 58 },
        { x: 8, y: 59 },
        { x: 9, y: 53 },
        { x: 10, y: 54 },
        { x: 11, y: 61 },
        { x: 12, y: 60 },
        { x: 13, y: 55 },
        { x: 14, y: 60 },
        { x: 15, y: 56 },
        { x: 16, y: 60 },
        { x: 17, y: 59.5 },
        { x: 18, y: 63 },
        { x: 19, y: 58 },
        { x: 20, y: 54 },
        { x: 21, y: 59 },
        { x: 22, y: 64 },
        { x: 23, y: 59 }
      ]
    }]
  }

  return(
    <>
      <div className="three-dash-cont">

      <div className="item-cont">
        <img src={img} alt='' className="Imag1" />
        <p className="head-text">150</p>
        <div className="two-sec">
          <img src={img1} alt='' />
          <p>Uploaded Templates</p>
        </div>
      </div>

      <div className="item-cont" style={{border : '2px solid #001F39'}} >
        <img src={img4} alt='' className="Imag1" />
        <p className="head-text" style={{color : '#001F39'}}>250</p>
        <div className="two-sec">
          <img src={img2} alt='' />
          <p style={{color : '#001F39'}}>Created Templates</p>
        </div>
      </div>

      <div className="item-cont">
        <img src={img3} alt='' className="Imag1" />
        <p className="head-text">350</p>
        <div className="two-sec">
          <img src={img1} alt='' />
          <p>Total Staff</p>
        </div>
      </div>

      </div>

      <CanvasJSChart options = {options}
			/>
    </>
  );
};

export default HOC(Dashboard);
