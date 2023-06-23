/** @format */

import { FiFilter } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal, Form } from "react-bootstrap";
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
      name: "Paediatrician",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Urology",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Cardiologist",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Obstetrics",
      date: "15.05.2023",
      time: "06:20 PM",
    },
    {
      name: "Paediatrician",
      date: "15.05.2023",
      time: "06:20 PM",
    },
  ];

  function MyVerticallyCenteredModal(props) {
    const AddSpeciality = async () => {
      toast.success("Speciality Added");
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
            Add New Speciality
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Speciality Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

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
                Add
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
            <AiOutlinePlus className="text-xl" />
            Add new Care element{" "}
          </button>
        </div>
      </div>

      <div className="Recently-heading-container">
        <p>Recently Added</p>
      </div>

      <div className="Four-Sec-Container">
        {/* First */}
        <div className="main-Item">
          <div className="item">
            <p>Care Element</p>
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
