import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import FinancialPage from "./components/F and O Charts/Financial";
// import Navbar from "./components/Header/Navbar";
import Sustaunability from "./components/Sustainability/Sustaunability";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer";
import Md from "./pages/Md";
import CEO from "./pages/CEO";
import Business from "./pages/Business";
import Financial from "./components/F and O Charts/Financial";
import Award  from "./pages/Award";
import ChatbotWidget from "./components/comp/ChatbotWidget";
import Strategy from "./components/Strategy/Strategy";
import Strengthcore from "./components/Strategy/Strengthcore";
import Oppurtinity from "./components/Strategy/Oppurtinity";
import Board from "./pages/Board";
import Board2 from "./pages/Board2";
import Navbar2 from "./components/Header/Navbar2";
import ScrollToTop from './components/ScrollToTop';
import Embedsustain from "./components/Strategy/Embedsustain";
import Digital from "./components/Strategy/Digital";
import Future from "./components/Strategy/Future";
import Execution from "./components/Strategy/Execution";
import EsgGovernance from "./components/Sustainability/EsgGovernance";
import Esg from "./components/Sustainability/Esg";
import ForBetterNutrition from "./components/Sustainability/ForBetterNutrition";
import ForBetterCommunities from "./components/Sustainability/ForBetterCommunities";
import ForBetterSourcing from "./components/Sustainability/ForBetterSourcing";
import ForBetterPlanet from "./components/Sustainability/ForBetterPlanet";
import BusinessMomentum from "./components/comp/BusinessMomentum";
import Ourstrategy from "./components/Strategy/Ourstrategy";
import IndividualCard from "./pages/IndividualCard"
import CorporateInfo  from "./components/SustainingValuesComponents/CorporateInfo";
import FinancialHighlights from "./components/SustainingValuesComponents/FinancialHighlights";
import Governance from "./components/SustainingValuesComponents/Governance";
import ManagingRisks from "./components/SustainingValuesComponents/ManagingRisks";
import Materiality from "./components/SustainingValuesComponents/Materiality";
import RiskMgt from "./components/SustainingValuesComponents/RiskMgt";
import StakeholderValueCreation from "./components/SustainingValuesComponents/StakeholderValueCreation";
import SDG from "./components/SustainingValuesComponents/SDG";
import Gratitude_detail1 from "./components/comp/Gratitude_detail1";
import Gratitude_detail2 from "./components/comp/Gratitude_detail2";

function MainContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  
  return (
    <main className={`flex-1 ${!isLandingPage ? 'pt-[60px]' : ''}`}>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/board-of-directors" element={<Board/>}/>
        <Route path="/leadership-team" element={<Board2/>}/>
        <Route path="/business-momentum/chairman-message" element={<Md/>}/>
        <Route path="/business-momentum/ceo-message" element={<CEO/>}/>
        { <Route path="/business-momentum/landscape" element={<Business/>}/> }
        <Route path="/business-momentum/highlights" element={<FinancialPage />} />
        <Route path="/business-momentum/year-review" element={<Financial />} />
        <Route path="/sustainability" element={<Sustaunability />} />
        <Route path="/business-momentum/recognitions" element={<Award/>} />
        <Route path="/strategy" element={<Strategy/>} />
        <Route path="/strategy/core-growth" element={<Strengthcore/>} />
        <Route path="/strategy/opportunities" element={<Oppurtinity/>}/>
        <Route path="/strategy/sustainability" element={<Embedsustain/>}/>
        <Route path="/strategy/digital" element={<Digital/>}/>
        <Route path="/strategy/future-ready" element={<Future/>}/>
        <Route path="/strategy/execution" element={<Execution/>}/>
        <Route path="/sustainability/esg-highlights" element={<Esg/>}/>
        <Route path="/sustainability/esg-governance" element={<EsgGovernance/>}/>
        <Route path="/sustainability/nutrition" element={<ForBetterNutrition/>}/>
        <Route path="/sustainability/sourcing" element={<ForBetterSourcing/>}/>
        {/* <Route path="/sustainability/planet" element={<ForBetterPlanet/>}/> */}
        <Route path="/sustainability/communities" element={<ForBetterCommunities/>}/>
        <Route path="/sustainability/planet" element={<ForBetterPlanet/>}/>
        <Route path="/business-momentum" element={<BusinessMomentum/>}/>
        <Route path="/strategy/our-strategy" element={<Ourstrategy/>}/>
        <Route path="/profile/:id" element={<IndividualCard/>}/>
        {/* <Route path="/sustaining-value/Materiali" element={<StakeholderValueCreation/>}/> */}
        <Route path="/sustaining-value/Materiality_assessment_and_stakeholder_discussions" element={<Materiality/>}/>
        {/* <Route path="/sustaining-value/Sustainable_development_goals" element={<Sustainability/>}/> */}
        <Route path="/sustaining-value/Risk_management" element={<RiskMgt/>}/>
        <Route path="/sustaining-value/Sustainable_development_goals" element={<SDG/>}/>
        <Route path="/sustaining-value/Managing_risks" element={<ManagingRisks/>}/>
        <Route path="/sustaining-value/Governance" element={<Governance/>}/>
        <Route path="/sustaining-value/Corporate_information" element={<CorporateInfo/>}/>
        <Route path="/sustaining-value/Ten_year_financial_highlights" element={<FinancialHighlights/>}/>
        <Route path="/gratitude/founder" element={<Gratitude_detail1/>}/>
        <Route path="/gratitude/Tata" element={<Gratitude_detail2/>}/>
        </Routes>
      {/* <ChatbotWidget /> */}
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar2 />
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
