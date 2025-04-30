import React from 'react'
import HollowTextGSAP from '../word'
import banner from '/Sustainability/banner.jpg'
import Esg from './Esg'
import EsgGovernance from './EsgGovernance'
import Page from '../Page'
import ForBetterNutrition from './ForBetterNutrition'
import ForBetterCommunities from './ForBetterCommunities'

const Sustaunability = () => {
  return (
    <>
    <div className=' relative flex  w-full '>
    <img src={banner} alt="" className='h-[100vh] w-screen'/>
    <HollowTextGSAP text="Sustainability" stroke='white' fillColor='#22c55e'/>
    </div>
    <Esg/>
    <EsgGovernance/>
    
    {/* <Page/> */}
    <ForBetterNutrition/>


    <ForBetterCommunities/>
    </>
  )
}

export default Sustaunability