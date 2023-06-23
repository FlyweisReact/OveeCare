/** @format */

import React from "react";
import HOC from "../../layout/HOC";

const Index = () => {
  return (
    <>
      <div className="Center_Banner_Image">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
        />
      </div>

        <form>
            <div>
                <input type='text' placeholder="First Name" />
                <input type='text' placeholder="Last Name" />
            </div>
        </form>

    </>
  );
};

export default HOC(Index);
