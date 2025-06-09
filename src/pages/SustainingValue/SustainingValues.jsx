import React from 'react'
import GlobalCover from '../../Components/ConsumerCover'
import StakeholderValueCreation from '../../Components/SustainingValuesComponents/StakeholderValueCreation'
import Materiality from '../../Components/SustainingValuesComponents/Materiality'
import SDG from '../../Components/SustainingValuesComponents/SDG'
import RiskMgt from '../../Components/SustainingValuesComponents/RiskMgt'
import ManagingRisks from '../../Components/SustainingValuesComponents/ManagingRisks'
import Governance from '../../Components/SustainingValuesComponents/Governance'
import CorporateInfo from '../../Components/SustainingValuesComponents/CorporateInfo'
import FinancialHighlights from '../../Components/SustainingValuesComponents/FinancialHighlights'

const SustainingValues = () => {
  return (
    <div className=''>
        <GlobalCover/>
        <StakeholderValueCreation/>
        <Materiality/>
        <SDG/>
        <RiskMgt/>
        <ManagingRisks/>
        <Governance/>
        <CorporateInfo/>
        <FinancialHighlights/>
    </div>
  )
}

export default SustainingValues