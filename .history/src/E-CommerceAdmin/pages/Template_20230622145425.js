import React from 'react'
import HOC from '../layout/HOC'
import { AiOutlinePlus } from "react-icons/ai";

const Template = () => {
  return (
    <>
        <div className="Heading-Container">
        <p>Speciality</p>

        <div className="two-sec-container">
          <button className="btn-1">
            Filter
          </button>
          <button className="btn-2" onClick={() => setModalShow(true)}>
            <AiOutlinePlus className="text-xl" />
            Add new Speciality
          </button>
        </div>
      </div>
    </>
  )
}

export default HOC(Template)