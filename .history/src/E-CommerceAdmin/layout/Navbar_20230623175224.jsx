/** @format */

import bellImage from "../../Images/bell.png";
import userImage from "../../Images/uer.png";
import { Dropdown } from "react-bootstrap";
import { Store } from 'react-notifications-component';

const Navbar = () => {

  function LogOut ()  {
    

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
