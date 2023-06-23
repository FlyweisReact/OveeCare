/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./E-CommerceAdmin/forms/Login";
import Dashboard from "./E-CommerceAdmin/pages/Dashboard";
import EAdmin from "./E-CommerceAdmin/pages/EAdmin";
import { ReactNotifications } from "react-notifications-component";
import CareElement from "./E-CommerceAdmin/pages/Patient/CareElement";
import MedicalCondition from "./E-CommerceAdmin/pages/Medical-condition";
import MedicalConditionAll from "./E-CommerceAdmin/pages/medical-condition-all";
import Hospital from "./E-CommerceAdmin/pages/Hospital";
import AddHospital from "./E-CommerceAdmin/pages/add-hospital";
import Doctor from "./E-CommerceAdmin/pages/doctor";
import Template from "./E-CommerceAdmin/pages/Template";
import NewTemplate from "./E-CommerceAdmin/pages/NewTemplate";
import AddDoctor from "./E-CommerceAdmin/pages/addDoctor";
import AllPatient from "./E-CommerceAdmin/pages/Patient/AllPatient";
import CreatePateint from "./E-CommerceAdmin/pages/Patient/CreatePateint";

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
        <Route path="/add-doctor" element={<AddDoctor />} />

        <Route path="/templates" element={<Template />} />
        <Route path="/newTemplate" element={<NewTemplate />} />

        <Route path="/patient" element={<AllPatient />} />
        <Route path="/create-patient" element={<CreatePateint />} />
      </Routes>
    </>
  );
}

export default App;
