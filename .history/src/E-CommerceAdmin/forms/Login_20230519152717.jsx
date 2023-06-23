/** @format */

import logo from "../../Images/logo.png";
import userIcon from '../../Icons/user.png'

const Login = () => {
  return (
    <>
      <div className="Login-Cont">
        <div className="upper-div">
          <img src={logo} alt="Logo" />
        </div>
        <div className="lower-div">
          <form>
            <div>
              <input type='text' placeholder="Admin ID" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
