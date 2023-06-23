/** @format */

import HOC from "../layout/HOC";
import img from '../../Images/Uploading-pana 1.png'
import img1 from '../../Images/Group 201.png'

const Dashboard = () => {
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
      <div className="item-cont">
        <img src={img} alt='' className="Imag1" />
        <p className="head-text">250</p>
        <div className="two-sec">
          <img src={img1} alt='' />
          <p>Created Templates</p>
        </div>
      </div>
      <div className="item-cont">
        <img src={img} alt='' className="Imag1" />
        <p className="head-text">350</p>
        <div className="two-sec">
          <img src={img1} alt='' />
          <p>Uploaded Templates</p>
        </div>
      </div>

      </div>
    </>
  );
};

export default HOC(Dashboard);
