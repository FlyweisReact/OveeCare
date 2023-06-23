import React from 'react'
import HOC from '../layout/HOC'

const Template = () => {
  return (
    <>
        <div className="Heading-Container">
        <p>Speciality</p>

        <div className="two-sec-container">
          <button className="btn-1">
            <FiFilter className="text-xl" />
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