import React from 'react'
// import Strategy41st_page from '../../pages/Strategy41st_page'
import Strategy42nd_page from '../../pages/Strategy42nd_page'
import SoftCover from '../dos/SoftCover'
const Execution = () => {
  const softData ={
      bgColor : "#0066b3",
      image : "/strategy/2.webp",
      heading1 : "Drive \n execution \n excellence \n everyday",
  }
  return (
    <div className=''>
      <SoftCover props={softData}/>
      {/* <Strategy41st_page/> */}
      <Strategy42nd_page/>
    </div>
  )
}

export default Execution