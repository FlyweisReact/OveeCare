/** @format */

import logo from "../../Images/logo.png";
import 

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
              <input type='text' />

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
