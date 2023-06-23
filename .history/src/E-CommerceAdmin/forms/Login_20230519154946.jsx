/** @format */
import { useState } from "react";
import logo from "../../Images/logo.png";
import userIcon from "../../Icons/user.png";
import lockIcon from "../../Icons/password.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [inputType, setInputType] = useState(false);
  const navigate = useNavigate();

  const LoginFunc = async () => {
    try{
    }catch(e) { 
      console.log(e)
    }
  }

  return (
    <>
      <div className="Login-Cont">
        <div className="upper-div">
          <img src={logo} alt="Logo" />
        </div>
        <div className="lower-div">
          <form>
            <div>
              <input type="text" placeholder="Admin ID" />
              <img src={userIcon} alt="" />
            </div>
            <div>
              <input
                type={inputType ? "text" : "password"}
                placeholder="Password"
              />
              <img
                src={lockIcon}
                alt=""
                onClick={() => setInputType(!inputType)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <button type="button" onClick={() => navigate("/dashboard")}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
