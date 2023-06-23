/** @format */

import bellImage from "../../Images/bell.png";
import userImage from "../../Images/uer.png";
import { Dropdown } from "react-bootstrap";
import { Store } from 'react-notifications-component';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

  function LogOut ()  {
    Store.addNotification({
      title: "",
      message : "You have been logged out" ,
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1500,
        onScreen: true
      }
    })
    navigate('/dashboard')

  }

  return (
    <>
      <div className="navbar-cont">
        <div className="left-cont">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="Search" placeholder="Search" />
        </div>

        <div className="right">
          <img src={bellImage} alt="" />

          <div className="under-cont">
            <img src={userImage} alt="" />
            <div>
              <p className="head">Prerna </p>
              <p className="second">Admin Login</p>
            </div>

            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Logout </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
