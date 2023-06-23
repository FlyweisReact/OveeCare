/** @format */

import React, { useState } from "react";
import HOC from "../layout/HOC";
import { AiOutlinePlus } from "react-icons/ai";

const Template = () => {
  const [step, setStep] = useState(1);

  let tablecontent;
  if (step === 1) {
    const TableComponent = () => {
      return (
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
        </table>
      );
    };
    tablecontent = <TableComponent />;
  } else if (step === 2) {
    const TableComponent = () => {
      return (
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
        </table>
      );
    };
    tablecontent = <TableComponent />;
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
            <li tabIndex={0} onClick={() => setStep(2)}>
              Other Medical
            </li>
            <li tabIndex={0} onClick={() => setStep(3)}>
              {" "}
              General
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="Focused">View All</li>
          </ul>
        </div>
      </div>
      {tablecontent}


      <div className="Templte_Two_Sec">
        
      </div>
    </>
  );
};

export default HOC(Template);
