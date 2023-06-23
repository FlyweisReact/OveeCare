import React from 'react'
import HOC from '../layout/HOC'

const NewTemplate = () => {
  return (
   <>
     <div className="Heading-Container">
        <p>Templates</p>
        <div className="two-sec-container">
          <button className="btn-1">Modify</button>
        </div>
      </div>
   </>
  )
}

export default HOC(NewTemplate)