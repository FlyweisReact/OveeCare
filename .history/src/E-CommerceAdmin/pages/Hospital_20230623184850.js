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

      <div className="Four-Sec-Container">
        {/* First */}
        <div className="main-Item">
          <div className="item">
            <p>Hospital Name</p>
          </div>

          {data.map((i, index) => (
            <div className="sub-Items" key={index}>
              <p>Lorem Ipsum</p>
              <i class="fa-sharp fa-solid fa-pen"></i>
            </div>
          ))}
        </div>
        <div className="main-Item">
          <div className="item">
            <p>Hospital ID</p>
          </div>

          {data.map((i, index) => (
            <div className="sub-Items" key={index}>
              <p>225262301225</p>
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
              <p className="bg-suc"> Onboarded </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HOC(Index);
