import React from 'react'
import SoftCover from '../dos/SoftCover'

const StakeholderValueCreation = () => {
    const softData = {
        bgColor: "#36bfec",
        image: "/dos/stakeholders.webp",
        heading1: "Our\n stakeholders \n and topics of \n priority"
       
      }
    return (
        <div className=''>
            <SoftCover props={softData}/>
        </div>
    )
}

export default StakeholderValueCreation