import React from 'react'
import Navbar from '../Dashboard/Navbar'
import Sidebar from '../Dashboard/Sidebar'
import Listsection from './Listsection'
import Segmentcontrol from './Segmentcontrol'
const RequestPage = () => {
  return (
    <div>
    
      <Navbar/>
      <Segmentcontrol/>
      {/* <div className='list-section'>
     <Listsection/>

      </div> */}

      
    </div>
  )
}

export default RequestPage
