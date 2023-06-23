/** @format */

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(false);
    return (
      <>
        <section className="HOC-comp">
     
          <div className="left">
            <Sidebar hamb={hamb} setHamb={setHamb} />
          </div>

          {/* Components & Navbar */}
          <div  className="right">
            <Navbar hamb={hamb} setHamb={setHamb} />
            <div className="my-6 text-#000 h-[87%] wcomp  ">
              {" "}
              <Wcomponenet />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
