/** @format */
import HOC from "../layout/HOC";
import { FiFilter } from "react-icons/fi";
import { Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { Store } from "react-notifications-component";

const EAdmin = () => {
  const [modalShow, setModalShow] = useState(false);
  const [ edit , setEdit ] = useState(false)
  const [ name , setName ] = useState('')

  const data = [
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
    {
      name: "Cardiologist",
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
      Store.addNotification({
        title: "Success",
        message: "New Speciality Created ",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1500,
          onScreen: true,
        },
      });
      props.onHide();
    };

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="Modal_Title">
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Speciality
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="Modal_Form">
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
        <p>Speciality</p>

        <div className="two-sec-container">
          <button className="btn-1">
            <FiFilter className="text-xl" />
            Filter
          </button>
          <button className="btn-2" onClick={() => {setModalShow(true)}}>
            <i className="fa-solid fa-circle-plus text-xl"></i>
            Add New Speciality
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
    </>
  );
};

export default HOC(EAdmin);
