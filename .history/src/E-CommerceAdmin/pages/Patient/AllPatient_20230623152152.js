/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { FiFilter } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

const AllPatient = () => {
  return (
    <>
      <div className="Heading-Container">
        <p>Manage Patient </p>
        <div className="two-sec-container">
          <button className="btn-1">
            <FiFilter className="text-xl" />
            Filter
          </button>
          <button className="btn-2">
            <AiOutlinePlus className="text-xl" />
            Add New Patient
          </button>
        </div>
      </div>


        <table className="Fixed_Tabler">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Patient Name</th>
                    <th>D.O.B</th>
                    <th>Assign Doctor</th>
                    <th>Status</th>
                </tr>
            </thead>
        </table>


    </>
  );
};

export default HOC(AllPatient);
