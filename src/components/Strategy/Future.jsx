import React from 'react'
import Strategy43rd_page2 from '../../pages/Strategy43rd_page2'
import Strategy43rd_page3 from '../../pages/Strategy43rd_page3'
import SoftCover from '../dos/SoftCover'
import Strategy43rd_page from '../../pages/Strategy43rd_page'
const Future = () => {
  const softData ={
    bgColor : "#0066b3",
    image : "/strategy/3.webp",
    heading1 : "Create \n future-ready \n organisation",
}
  return (
    <div className=''>
    <SoftCover props={softData}/>
    <Strategy43rd_page/>
    <Strategy43rd_page2/>
    <Strategy43rd_page3/>
    </div>
  )
}

export default Future