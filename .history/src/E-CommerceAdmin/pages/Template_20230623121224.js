/** @format */

import React, { useState } from "react";
import HOC from "../layout/HOC";
import { AiOutlinePlus } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";

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
            <li  className={step === 1   ? "active" : ""} onClick={() => setStep(1)}>
              Pregnancy
            </li>
            <li  className={step === 2   ? "active" : ""} onClick={() => setStep(2)}>
              Other Medical
            </li>
            <li className={step === 3   ? "active" : ""} onClick={() => setStep(3)}>
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
        <div className="Left">
          <div className="Upper">
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                Message type
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Welcome</Dropdown.Item>
                <Dropdown.Item href="#/action-2"> On Boarding</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Festival</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Seasonal Update</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button className="Button">
              {" "}
              <i className="fa-solid fa-upload"></i> Upload
            </button>
            <button className="Button">One time message</button>
          </div>

          <textarea placeholder="Type Here..." />
          <div className="Upper mt-5">
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                Event onboarding
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Hospital onboard
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  Doctor Onboard{" "}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
              <i className="fa-solid fa-filter"></i>
         </div>
        </div>
        <div className="Right">
          <div className="Main_Item">
            <p className="head"> Hospital </p>
            <div className="content">
              <button>Save draft</button>
              <div className="two_sec">
                <p>Status : <span>Draft </span></p>
                <button>Edit</button>
              </div>

              <div className="two_sec">
                <p>Visibility : <span>Public </span></p>
                <button>Edit</button>
              </div>


              <div className="two_sec">
                <p>Publish : <span>Immediately </span></p>
                <button>Edit</button>
              </div>

                <div  className="saveBtn">
                <button>Submit</button>

                </div>


            </div>
          </div>

          <div className="Main_Item">
            <p className="head"> Industries </p>
            <div className="content">

    <p></p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(Template);
