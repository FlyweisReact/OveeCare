/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { FiFilter } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsThreeDots} from 'react-icons/bs'

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
          <BsThreeDots />
        </div>
      </div>
    </>
  );
};

export default HOC(Index);
