/** @format */

import { FiFilter } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal, Form, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const CareElement = () => {
  const [modalShow, setModalShow] = useState(false);

  const data = [
    {
      name: "Nutrition & Diet",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Physio",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Exercises",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Do’s & Don’ts",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Trigger Points",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Documents",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Exercises",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Do’s & Don’ts",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Trigger Points",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Documents",
      date: "15.05.2023",
      time: "06:20 PM",
    },
  ];

  function MyVerticallyCenteredModal(props) {
    const AddSpeciality = async () => {
      toast.success("Care Element Added");
      props.onHide();
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Care Element
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Add Care element</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <FloatingLabel
              controlId="floatingTextarea2"
              label="About Care Element"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>

            <div className="two-submit-btn">
              <button
                className="btn-1"
                type="button"
                onClick={() => props.onHide()}
              >
                Cancel
              </button>
              <button
                className="btn-2"
                type="button"
                onClick={() => AddSpeciality()}
              >
                Submit
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="Heading-Container">
        <p>Care Element</p>

        <div className="two-sec-container">
          <button className="btn-1">
            <FiFilter className="text-xl" />
            Filter
          </button>
          <button className="btn-2" onClick={() => setModalShow(true)}>
          <i className="fa-solid fa-circle-plus text-xl"></i>
            Add new Care element{" "}
          </button>
        </div>
      </div>

      <div className="Recently-heading-container">
        <p>Recently Added</p>
      </div>


      <table className="Fixed_Tabler">
        <thead>
          <tr>
            <th>Number</th>
            <th>Speciality Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, index) => (
            <tr key={index}>
              <td> #{index + 1} </td>
              <td>
                <span className="Image_Cont">
                  <p>{i.name} </p>
                  <i
                    className="fa-solid fa-pen"
                    onClick={() => setModalShow(true)}
                  ></i>
                </span>
              </td>
              <td>{i.date}</td>
              <td>{i.time}</td>
              <td className="Complete_Success">Uploaded</td>
            </tr>
          ))}
        </tbody>
      </table>


      <div className="Four-Sec-Container">
        {/* First */}
        <div className="main-Item">
          <div className="item">
            <p></p>
          </div>

          {data.map((i, index) => (
            <div className="sub-Items" key={index}>
              <p>{i.name}</p>
              <i class="fa-sharp fa-solid fa-pen"></i>
            </div>
          ))}
        </div>

        {/* Second */}
        <div className="main-Item">
          <div className="item">
            <p>Date</p>
          </div>
          {data.map((i, index) => (
            <div className="sub-Items" key={index}>
              <p>{i.date}</p>
            </div>
          ))}
        </div>

        {/* Third */}
        <div className="main-Item">
          <div className="item">
            <p>Time</p>
          </div>
          {data.map((i, index) => (
            <div className="sub-Items" key={index}>
              <p>{i.time}</p>
            </div>
          ))}
        </div>

        {/* Fourth */}
        <div className="main-Item">
          <div className="item">
            <p>Status</p>
          </div>

          {data.map((i, index) => (
            <div className="sub-Items" key={index}>
              <p className="bg-suc"> Uploaded </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HOC(CareElement);
