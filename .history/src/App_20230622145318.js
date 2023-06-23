/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./E-CommerceAdmin/forms/Login";
import Dashboard from "./E-CommerceAdmin/pages/Dashboard";
import EAdmin from "./E-CommerceAdmin/pages/EAdmin";
import { ReactNotifications } from "react-notifications-component";
import CareElement from "./E-CommerceAdmin/pages/Component/CareElement";
import MedicalCondition from "./E-CommerceAdmin/pages/Medical-condition";
import MedicalConditionAll from "./E-CommerceAdmin/pages/medical-condition-all";
import Hospital from "./E-CommerceAdmin/pages/Hospital";
import AddHospital from "./E-CommerceAdmin/pages/add-hospital";
import Doctor from "./E-CommerceAdmin/pages/doctor";
import Template from "./E-CommerceAdmin/pages/Template";

function App() {
  return (
    <>
      <ToastContainer />
      <ReactNotifications />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/speciality" element={<EAdmin />} />
        <Route path="/care-element" element={<CareElement />} />
        <Route path="/medical-condition" element={<MedicalCondition />} />
        <Route
          path="/medical-condition-all"
          element={<MedicalConditionAll />}
        />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/add-hospital" element={<AddHospital />} />
        <Route path="/doctor" element={<Doctor />} />

        <Route path="/templates" element={<Template />} />
      </Routes>
    </>
  );
}

export default App;
