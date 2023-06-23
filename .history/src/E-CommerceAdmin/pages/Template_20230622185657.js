/** @format */

import React, { useState } from "react";
import HOC from "../layout/HOC";
import { AiOutlinePlus } from "react-icons/ai";
import { Dropdown} from 'antd'
import  { MenuProps } from 'antd';

const Template = () => {
  const [step, setStep] = useState(1);

// DropDown
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];


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
        <div className="Left">
          <div className="Upper">
          <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
        Click me
    </a>
  </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(Template);
