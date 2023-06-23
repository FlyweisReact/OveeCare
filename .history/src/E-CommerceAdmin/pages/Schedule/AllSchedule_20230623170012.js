import React from 'react'
import HOC from '../../layout/HOC'

const AllSchedule = () => {
  return (
    <>
         <div className="Heading-Container">
        <p>Staff</p>
        <div className="two-sec-container">
          <button className="btn-1">
            <FiFilter className="text-xl" />
            Filter
          </button>
          <Link to="/add-staff">
            <button className="btn-2">
              <AiOutlinePlus className="text-xl" />
              Add Staff
            </button>
          </Link>
          <Link to="/remove-staff">
            <BsThreeDots className="BsDot" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default HOC(AllSchedule)