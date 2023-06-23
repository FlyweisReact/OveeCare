/** @format */

import React, { useState } from "react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import logo from '../../Images/logo.png'
import axios from 'axios'
import { Alert } from "react-bootstrap";

const Login = () => {
  const [pass, setPass] = useState(false);
  const [inputpass, setInputpass] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [ email , setEmail  ] = useState("")
  const [ password , setPassword  ] = useState("")
  const [ error , setError  ] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      navigate("/dashboard");
      toast.success("Welcome Admin");
      setLoading(false);
    } catch (err) {
      console.log("Admin Login err => ", err);
      setLoading(false);
      setError(true)
    }
  };



  return (
    <>
  
    </>
  );
};

export default Login;
