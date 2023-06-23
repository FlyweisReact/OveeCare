import HOC from "../layout/HOC";
import { FiFilter } from "react-icons/fi";


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
  
    const buttonData = ["Obgy", "Ortho", "Medicine", "Surgery"];
    const buttonData2 = ["BP", "Sugar", "Medicine", "Surger"]
  
    return (
      <>
        <div className="Heading-Container">
          <p>Medical Condition</p>
  
          <div className="two-sec-container">
            <button className="btn-1">
              <FiFilter className="text-xl" />
              Filter
            </button>
            <p
            className="underline-text"
          >
            View All
          </p>
          </div>
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
              <p>Medical Condition</p>
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


        <div className="New-Add-Section">
        <div className="last-icons">
          <i class="fa-regular fa-trash-can"></i>
          <i class="fa-solid fa-pen"></i>
        </div>

        <div className="Form-Section">
          <form>
            <div className="two-input-sec">
              <div className="left-div">
                <p>Name</p>
              </div>
              <input type={"text"} placeholder="Hernia" />
            </div>

            <div className="two-input-sec">
              <div className="left-div">
                <p>Speciality</p>
              </div>
              <div className="four-sec-div">
                <div className="buttons">
                  {buttonData.map((i, index) => (
                    <button type="button" key={index}>
                      {i}
                    </button>
                  ))}
                </div>
                <p>Add New +</p>
              </div>
            </div>

            <div className="two-input-sec">
              <div className="left-div">
                <p>Patient Profile</p>
              </div>
              <div className="four-sec-div">
                <div className="buttons">
                  {buttonData2.map((i, index) => (
                    <button type="button" key={index}>
                      {i}
                    </button>
                  ))}
                </div>
                <p>Add New +</p>
              </div>
            </div>
          </form>
        </div>

        <div className="last-icons">
          <button>Save</button>
        </div>
      </div>
      </>
    );
  };
  
export default HOC(Index)