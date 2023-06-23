/** @format */

import HOC from "../layout/HOC";
import img from "../../Images/Uploading-pana 1.png";
import img1 from "../../Images/Group 201.png";
import img2 from "../../Images/Group 203.png";
import img3 from "../../Images/Health professional team-pana 1.png";
import img4 from "../../Images/storyboard 1.png";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Dashboard = () => {
  const options = {
    animationEnabled: true,

    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "2016",
        showInLegend: true,
        dataPoints: [
          { y: 35, label: "Jan" },
          { y: 50, label: "Feb" },
          { y: 52, label: "Mar" },
          { y: 28, label: "Apr" },
          { y: 42, label: "May" },
          { y: 20, label: "Jun" },
          { y: 16, label: "Jul" },
          { y: 39, label: "Aug" },
          { y: 50, label: "Sept" },
          { y: 20, label: "Oct" },
          { y: 30, label: "Nov" },
          { y: 50, label: "Dec" },
        ],
      },
      {
        type: "spline",
        name: "2017",
        showInLegend: true,
        dataPoints: [
          { y: 10, label: "Jan" },
          { y: 20, label: "Feb" },
          { y: 40, label: "Mar" },
          { y: 70, label: "Apr" },
          { y: 30, label: "May" },
          { y: 40, label: "Jun" },
          { y: 72, label: "Jul" },
          { y: 58, label: "Aug" },
          { y: 95, label: "Sept" },
          { y: 10, label: "Oct" },
          { y: 35, label: "Nov" },
          { y: 29, label: "Dec" },
        ],
      },
    ],
  };

  return (
    <>
      <div className="three-dash-cont">
        <div className="item-cont">
          <img src={img} alt="" className="Imag1" />
          <p className="head-text">150</p>
          <div className="two-sec">
            <img src={img1} alt="" />
            <p>Uploaded Templates</p>
          </div>
        </div>

        <div className="item-cont" style={{ border: "2px solid #001F39" }}>
          <img src={img4} alt="" className="Imag1" />
          <p className="head-text" style={{ color: "#001F39" }}>
            250
          </p>
          <div className="two-sec">
            <img src={img2} alt="" />
            <p style={{ color: "#001F39" }}>Created Templates</p>
          </div>
        </div>

        <div className="item-cont">
          <img src={img3} alt="" className="Imag1" />
          <p className="head-text">350</p>
          <div className="two-sec">
            <img src={img1} alt="" />
            <p>Total Staff</p>
          </div>
        </div>
      </div>

      <div className="dashboard-chart-container">
        <div>
          <CanvasJSChart options={options} />
        </div>
      </div>
      
    </>
  );
};

export default HOC(Dashboard);
