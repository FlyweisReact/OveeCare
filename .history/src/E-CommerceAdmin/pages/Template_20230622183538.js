/** @format */

import React, { useState } from "react";
import HOC from "../layout/HOC";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal} from 'react-bootstrap'

const Template = () => {
const [ moadlShow , setModalShow ] = useState(true)

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

  return (
    <>
    <MyVerticallyCenteredModal show={modalS}
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
            <li tabIndex={0}>Pregnancy</li>
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
    </>
  );
};

export default HOC(Template);
