/** @format */
import { useState } from "react";
import logo from "../../Images/logo.png";
import userIcon from '../../Icons/user.png'
import lockIcon from '../../Icons/password.png'

const Login = () => {
  const [ inputType , setInputType ] = useState(false)
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
              <input type={inputType ? "text" : 'password'} placeholder="Password" />
                <img src={lockIcon} alt='' onClick={() => password} />
            </div>
            <button type='button'>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
