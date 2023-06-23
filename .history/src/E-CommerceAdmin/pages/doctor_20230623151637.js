import HOC from "../layout/HOC";
import { FiFilter } from "react-icons/fi";
import {AiOutlinePlus} from 'react-icons/ai'


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
            <link
            <button className="btn-2" >
            <AiOutlinePlus className="text-xl" />
            Add New Doctor{" "}
          </button>
          </div>
        </div>
  
  
        <div className="Four-Sec-Container">
          {/* First */}
          <div className="main-Item">
            <div className="item">
              <p>Doctor Name</p>
            </div>
  
            {data.map((i, index) => (
              <div className="sub-Items" key={index}>
                <p>{i.name}</p>
                <i class="fa-sharp fa-solid fa-pen"></i>
              </div>
            ))}
          </div>
          {/* First */}
          <div className="main-Item">
            <div className="item">
              <p>Doctor ID</p>
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
                <p className="bg-suc"> Uploaded </p>
              </div>
            ))}
          </div>
        </div>



      </>
    );
  };
  
export default HOC(Index)