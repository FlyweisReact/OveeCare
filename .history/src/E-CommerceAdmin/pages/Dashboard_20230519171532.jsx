/** @format */

import HOC from "../layout/HOC";
import img from '../../Images/Uploading-pana 1.png'

const Dashboard = () => {
  return(
    <>
      <div className="three-dash-cont">
      <div>
        <img src={img} alt='' />
      </div>

      </div>
    </>
  );
};

export default HOC(Dashboard);
