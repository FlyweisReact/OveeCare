/** @format */

import React, { useState } from "react";
import HOC from "../layout/HOC";
import { AiOutlinePlus } from "react-icons/ai";

const Template = () => {
  const [step, setStep] = useState(1);

  let tablecontent;
   
  if (step === 1) {
      const TableComponent = () => {
        <table className="Colored_Table">
        <thead>
          <tr>
            <th>Templates</th>
            <th>Speciality</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pregnancy 10 Months</td>
            <td>
              <span>
                <button>OBGY</button>
                <button>Paediatrician</button>
                <button>Surgery</button>
              </span>
            </td>
          </tr>
  
          <tr>
            <td>Cardiologist</td>
            <td>
              <span>
                <button>OBGY</button>
                <button>Paediatrician</button>
                <button>Surgery</button>
              </span>
            </td>
          </tr>
  
          <tr>
            <td>Urologist</td>
            <td>
              <span>
                <button>OBGY</button>
                <button>Paediatrician</button>
                <button>Surgery</button>
              </span>
            </td>
          </tr>
          <tr>
            <td>Gynaecologist</td>
            <td>
              <span>
                <button>OBGY</button>
                <button>Paediatrician</button>
                <button>Surgery</button>
              </span>
            </td>
          </tr>
          <tr>
            <td>Pregnancy 10 Months</td>
            <td>
              <span>
                <button>OBGY</button>
                <button>Paediatrician</button>
                <button>Surgery</button>
              </span>
            </td>
          </tr>
  
          <tr>
            <td>Cardiologist</td>
            <td>
              <span>
                <button>OBGY</button>
                <button>Paediatrician</button>
                <button>Surgery</button>
              </span>
            </td>
          </tr>
  
          <tr>
            <td>Urologist</td>
            <td>
              <span>
                <button>OBGY</button>
                <button>Paediatrician</button>
                <button>Surgery</button>
              </span>
            </td>
          </tr>
          <tr>
            <td>Gynaecologist</td>
            <td>
              <span>
                <button>OBGY</button>
                <button>Paediatrician</button>
                <button>Surgery</button>
              </span>
            </td>
          </tr>
          <tr>
            <td>Pregnancy 10 Months</td>
            <td>
              <span>
                <button>OBGY</button>
                <button>Paediatrician</button>
                <button>Surgery</button>
              </span>
            </td>
          </tr>
  
          <tr>
            <td>Cardiologist</td>
            <td>
              <span>
                <button>OBGY</button>
                <button>Paediatrician</button>
                <button>Surgery</button>
              </span>
            </td>
          </tr>
  
          <tr>
            <td>Urologist</td>
            <td>
              <span>
                <button>OBGY</button>
                <button>Paediatrician</button>
                <button>Surgery</button>
              </span>
            </td>
          </tr>
          <tr>
            <td>Gynaecologist</td>
            <td>
              <span>
                <button>OBGY</button>
                <button>Paediatrician</button>
                <button>Surgery</button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>;
      }
  }

  return (
    <>
      <div className="Heading-Container">
        <p>Templates</p>
        <div className="two-sec-container">
          <button className="btn-1">Modify</button>
          <button className="btn-2">
            <AiOutlinePlus className="text-xl" />
            Create New
          </button>
        </div>
      </div>

      <div className="Four_Sec_Temp">
        <div>
          <ul>
            <li tabIndex={0} onClick={() => setStep(1)}>
              Pregnancy
            </li>
            <li tabIndex={0}>Other Medical</li>
            <li tabIndex={0}> General</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="Focused">View All</li>
          </ul>
        </div>
      </div>

      {tableconten}
    </>
  );
};

export default HOC(Template);
