import React from 'react'
import HOC from '../../layout/HOC'

const AllPatient = () => {
  return (
    <>
          <div className="Heading-Container">
          <p>Doctor</p>
  
          <div className="two-sec-container">
            <button className="btn-1">
              <FiFilter className="text-xl" />
              Filter
            </button>
            <button className="btn-2" >
            <AiOutlinePlus className="text-xl" />
            Add New Doctor{" "}
          </button>
          
            </Link>
           </div>
        </div>
    </>
  )
}

export default HOC(AllPatient)