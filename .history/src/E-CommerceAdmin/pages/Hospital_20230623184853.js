/** @format */

import HOC from "../layout/HOC";
import { FiFilter } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
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

  return (
    <>
      <div className="Heading-Container">
        <p>Hospital</p>

        <div className="two-sec-container">
          <button className="btn-1">
            <FiFilter className="text-xl" />
            Filter
          </button>
          <button className="btn-2" onClick={() => navigate("/add-hospital")}>
          <i className="fa-solid fa-circle-plus text-xl"></i>
            Add New Hospital{" "}
          </button>
        </div>
      </div>

      <table className="Fixed_Tabler">
        <thead>
          <tr>
            <th>Number</th>
            <th>Hospital Name</th>
            <th>Hospital ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
            <tr >
              <td> #1 </td>
              <td>
                <span className="Image_Cont">
                  <p>Lorem Ipsum </p>
                  <i
                    className="fa-solid fa-pen"
                  ></i>
                </span>
              </td>
              <td>225262301225</td>
              <td>10/05/2023</td>
              <td>4:00 PM</td>
              <td className="Complete_Success">Onboarded</td>
            </tr>
            <tr >
              <td> #2 </td>
              <td>
                <span className="Image_Cont">
                  <p>Lorem Ipsum </p>
                  <i
                    className="fa-solid fa-pen"
                  ></i>
                </span>
              </td>
              <td>225262301225</td>
              <td>10/05/2023</td>
              <td>4:00 PM</td>
              <td className="Pending">Pending</td>
            </tr>
        </tbody>
      </table>
    </>
  );
};

export default HOC(Index);
