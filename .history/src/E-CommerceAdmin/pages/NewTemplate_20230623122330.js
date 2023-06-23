import React from 'react'
import HOC from '../layout/HOC'

const NewTemplate = () => {
  return (
   <>
     <div className="Heading-Container">
        <p>Templates</p>
        <div className="two-sec-container">
          <button className="btn-1">Modify</button>
          <Link to='/newTemplate'>
          <button className="btn-2">
            <AiOutlinePlus className="text-xl" />
            Create New
          </button>
          </Link>
        
        </div>
      </div>
   </>
  )
}

export default HOC(NewTemplate)