/** @format */

import HOC from "../layout/HOC";
import img from '../../Images/Uploading-pana 1.png'
import img1 from '../../Images/Group 201.png'

const Dashboard = () => {
  return(
    <>
      <div className="three-dash-cont">

      <div className="item-cont">
        <img src={img} alt='' className="" />
        <p>150</p>
        <div>
          <img src={img1} alt='' />
          <p>Uploaded Templates</p>
        </div>
      </div>

      </div>
    </>
  );
};

export default HOC(Dashboard);
