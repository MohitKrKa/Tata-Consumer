import React from 'react'
import ConsumerCover from '../ConsumerCover'
import CorporateInfo from './CorporateInfo'
import SDG from './SDG'
import StakeholderValueCreation from './StakeholderValueCreation'
import FinancialHighlights from './FinancialHighlights'
import Governance from './Governance'
import RiskMgt from './RiskMgt'
import ManagingRisks from './ManagingRisks'
import Materiality from './Materiality'
const Sustaining_main = () => {
    const Sustaunability_obj = ({
        title : "Sustaining Value",
        bgImage : "url('/governance_logo/sustaining_cover_page.webp')",
        leftGradient : {
          from: "#013322",
          to: "#013322",
          opacity: 80
        },
        rightGradient : {
          from: "#013322",
          to: "#013322",
          opacity: 80
        },
        menuItems : [
          { 
            page: 228, 
            label: "Our stakeholders and topics of priority",
            link: "/sustaining-value/Our_stakeholders_and_topics_of_priority"
          },
          { 
            page: 232, 
            label: "Materiality assessment and stakeholder discussions",
            link: "/sustaining-value/Materiality_assessment_and_stakeholder_discussions"
          },
          { 
            page: 244, 
            label: "Sustainable development goals",
            link: "/sustaining-value/Sustainable_development_goals"
          },
          { 
            page: 248, 
            label: "Risk management",
            link: "/sustaining-value/Risk_management"
          },
          { 
            page: 254, 
            label: "Managing risks",
            link: "/sustaining-value/Managing_risks"
          },
          { 
            page: 258, 
            label: "Governance",
            link: "/sustaining-value/Governance"
          },
          { 
            page: 260, 
            label: "Corporate ",
            link: "/sustaining-value/Corporate_information"
          },
          { 
            page: 261, 
            label: "Ten year financial highlights",
            link: "/sustaining-value/Ten_year_financial_highlights" 
          },
        ],
      })
  return (
   <>
    <ConsumerCover {...Sustaunability_obj}/>
    <StakeholderValueCreation/>
    <Materiality/>
    <RiskMgt/>
    <SDG/>
    <ManagingRisks/>
    <Governance/>
    <CorporateInfo/>
    <FinancialHighlights/>
    </>
  )
}

export default Sustaining_main