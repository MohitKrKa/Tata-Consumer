import React from 'react'
import HollowTextGSAP from '../word'
import banner from '/Sustainability/banner.webp'
import Esg from './Esg'
import EsgGovernance from './EsgGovernance'
import Page from '../Page'
import ForBetterNutrition from './ForBetterNutrition'
import ForBetterCommunities from './ForBetterCommunities'
import GlobalCover from '../ConsumerCover'
import ForBetterSourcing from './ForBetterSourcing'
import ForBetterPlanet from './ForBetterPlanet'
const Sustaunability = () => {
const Sustaunability_obj = ({
    title : "Sustainability",
    bgImage : "url('/Sustainability/banner.webp')",
    leftGradient : {
      from: "#006531",
      to: "#006531",
      opacity: 30
    },
    rightGradient : {
      from: "#006531",
      to: "#006531",
      opacity: 30
    },
    menuItems : [
      { 
        page: 136, 
        label: "ESG highlights",
        link: "/sustainability/esg-highlights"
      },
      { 
        page: 138, 
        label: "ESG governance",
        link: "/sustainability/esg-governance"
      },
      { 
        page: 144, 
        label: "For better nutrition",
        link: "/sustainability/nutrition"
      },
      { 
        page: 160, 
        label: "For better sourcing",
        link: "/sustainability/sourcing"
      },
      { 
        page: 176, 
        label: "For better planet",
        link: "/sustainability/planet"
      },
      { 
        page: 196, 
        label: "Better communities",
        link: "/sustainability/communities"
      },
    ],
  })
  return (
    <>
    {/* <div className=' relative flex  w-full '>
    <img src={banner} alt="" className='h-[100vh] w-screen'/>
    <HollowTextGSAP text="Sustainability" stroke='white' fillColor='#22c55e'/>
    </div> */}
    <GlobalCover {...Sustaunability_obj}/>
    <Esg/>
    <EsgGovernance/>
    
    {/* <Page/> */}
    <ForBetterNutrition/>
<ForBetterSourcing/>
<ForBetterPlanet/>

    <ForBetterCommunities/>
    </>
  )
}
export default Sustaunability