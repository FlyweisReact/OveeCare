/** @format */

import logo from "../../Images/logo.png";
import userIcon from '../../Icons/user.png'
import lockIcon from '../../Icons/password.png'

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
              <img src={userIcon} alt='' />
            </div>
            <div>
              <input type='password' placeholder="Password" />
                <img src={lockIcon} alt='' />
            </div>
            <button></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
