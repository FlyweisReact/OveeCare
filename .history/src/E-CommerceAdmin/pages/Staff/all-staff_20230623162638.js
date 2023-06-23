/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { FiFilter } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

const Index = () => {
  return (
    <>
      <div className="Heading-Container">
        <p>Staff</p>
        <div className="two-sec-container">
          <button className="btn-1">
            <FiFilter className="text-xl" />
            Filter
          </button>
          <Link to="/create-patient">
            <button className="btn-2">
              <AiOutlinePlus className="text-xl" />
              Add Staff
            </button>
          </Link>
          <BsThreeDots className="BsDot" />
        </div>
      </div>

      <table className="Fixed_Tabler">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID Number</th>
            <th>Joined Date</th>
            <th> Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td> 2241502055 </td>
            <td> 2241502055 </td>
            <td> 15.05.2023 </td>
            <td> 15.05.2023 </td>
            <td className="Pending">Pending</td>
          </tr>
          <tr>
            <td></td>
            <td> 2241502055 </td>
            <td> 2241502055 </td>
            <td> 15.05.2023 </td>
            <td className="Complete_Success">Completed</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default HOC(Index);
