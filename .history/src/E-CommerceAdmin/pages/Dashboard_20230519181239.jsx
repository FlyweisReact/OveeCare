/** @format */

import HOC from "../layout/HOC";
import img from '../../Images/Uploading-pana 1.png'
import img1 from '../../Images/Group 201.png'
import img2 from '../../Images/Group 203.png'

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

      <div className="item-cont" style={{border : '2px solid #001F39'}} >
        <img src={img} alt='' className="Imag1" />
        <p className="head-text" style={{color : '#001F39'}}>250</p>
        <div className="two-sec">
          <img src={img2} alt='' />
          <p style={{color : '#001F39'}}>Created Templates</p>
        </div>
      </div>

      <div className="item-cont">
        <img src={img} alt='' className="Imag1" />
        <p className="head-text">350</p>
        <div className="two-sec">
          <img src={img1} alt='' />
          <p>Total Staff</p>
        </div>
      </div>

      </div>
    </>
  );
};

export default HOC(Dashboard);
