import React from 'react'
import HOC from '../../layout/HOC'

const RemoveStaff = () => {
  return (
    <>
        <div className='Remove_Staff_Three_Sec'>
            <div className='Main_Item'>
                <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='' />
                <p className='head'>Rahul Sharma</p>
                <p className='desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo</p>
                <button>Remove</button>
            </div>
        </div>
    </>
  )
}

export default HOC(RemoveStaff)