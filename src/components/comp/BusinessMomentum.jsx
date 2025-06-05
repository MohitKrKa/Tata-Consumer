import React from 'react'
import {motion} from 'framer-motion'
import GlobalCover from '../ConsumerCover'
// import ConsumerCover from '../ConsumerCover'
import Md from '../../pages/Md'
import CEO from '../../pages/CEO'
import Business from '../../pages/Business'
// import FinancialPage from '../../pages/FinancialPage'
// import Financial from '../../pages/Financial'
import Financial from "../F and O Charts/Financial";
import FinancialPage from "../F and O Charts/Financial";
import Award from '../../pages/Award'
const BusinessMomentum = () => {
    const BusinessMomentum_obj = ({
        title : "Business \nMomentum",
        bgImage : "url('/businessmomentum0.webp')",
        leftGradient : {
          from: "#00742b",
          to: "#00742b",
          opacity: 80
        },
        rightGradient : {
          from: "#00742b",
          to: "#00742b",
          opacity: 80
        },
        menuItems :[
          { 
            page: 34, 
            label: "Chairman's message",
            link: "/business-momentum/chairman-message"
          },
          { 
            page: 36, 
            label: "MD & CEO’s message",
            link: "/business-momentum/ceo-message"
          },
          { 
            page: 44, 
            label: "Business landscape",
            link: "/business-momentum/landscape"
          },
          { 
            page: 50, 
            label: "Financial and operational highlights",
            link: "/business-momentum/highlights"
          },
          { 
            page: 52, 
            label: "Year in review",
            link: "/business-momentum/year-review"
          },
          { 
            page: 54, 
            label: "Spotlight on recognitions",
            link: "/business-momentum/recognitions"
          },
         
        ],
      })
  return (
    <div>
        <GlobalCover {...BusinessMomentum_obj}/>
        <Md/>
        <CEO/>
        <Business/>
        <FinancialPage/>
        {/* <Financial/> */}
        <Award/>
    </div>
  )
}

export default BusinessMomentum