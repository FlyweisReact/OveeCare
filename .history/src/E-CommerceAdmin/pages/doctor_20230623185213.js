import HOC from "../layout/HOC";
import { FiFilter } from "react-icons/fi";
import {AiOutlinePlus} from 'react-icons/ai'
import { Link } from "react-router-dom";


const Index = () => {

    const data = [
      {
        name: "OBGY",
        date: "15.05.2023",
        time: "06:20 PM",
      },
      {
        name: "OBGY",
        date: "15.05.2023",
        time: "06:20 PM",
      },
      {
        name: "OBGY",
        date: "15.05.2023",
        time: "06:20 PM",
      },
      {
        name: "OBGY",
        date: "15.05.2023",
        time: "06:20 PM",
      },
      {
        name: "OBGY",
        date: "15.05.2023",
        time: "06:20 PM",
      },
      {
        name: "ORTHO",
        date: "15.05.2023",
        time: "06:20 PM",
      },
      {
        name: "Surgery",
        date: "15.05.2023",
        time: "06:20 PM",
      },
      {
        name: "Surgery",
        date: "15.05.2023",
        time: "06:20 PM",
      },
      {
        name: "Surgery",
        date: "15.05.2023",
        time: "06:20 PM",
      },
      {
        name: "Surgery",
        date: "15.05.2023",
        time: "06:20 PM",
      },
      {
        name: "Surgery",
        date: "15.05.2023",
        time: "06:20 PM",
      },
    ];
  
  
    return (
      <>
        <div className="Heading-Container">
          <p>Doctor</p>
  
          <div className="two-sec-container">
            <button className="btn-1">
              <FiFilter className="text-xl" />
              Filter
            </button>
            <Link to='/add-doctor'>
            <button className="btn-2" >
            <AiOutlinePlus className="text-xl" />
            Add New Doctor{" "}
          </button>
          
            </Link>
           </div>
        </div>
  

        <table className="Fixed_Tabler">
        <thead>
          <tr>
            <th>Number</th>
            <th>Doctor Name</th>
            <th>Doctor ID</th>
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
              <td className="Complete_Success">Active</td>
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
  
export default HOC(Index)