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
import ConsumerCover from '../ConsumerCover'
const Sustaunability = () => {
const Sustaunability_obj = ({
    title : "Sustainability",
    bgImage : "url('/Sustainability/banner.webp')",
    leftGradient : {
      from: "#016f45",
      to: "#016f45",
      opacity: 80
    },
    rightGradient : {
      from: "#016f45",
      to: "#016f45",
      opacity: 80
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
    <ConsumerCover {...Sustaunability_obj}/>
    {/* <GlobalCover {...Sustaunability_obj}/> */}
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