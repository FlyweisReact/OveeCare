import React from 'react'
import HOC from '../layout/HOC'

const NewTemplate = () => {
  return (
   <>
     <div className="Heading-Container">
        <p>Create New Templates</p>
      </div>

        <form className='Template_Form'>
        <div className='InputForm'>
            <p></p>
        </div>

        </form>

   </>
  )
}

export default HOC(NewTemplate)