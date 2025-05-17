import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FinancialPage from "./components/F and O Charts/Financial";
import Navbar from "./components/Header/Navbar";
import Sustaunability from "./components/Sustainability/Sustaunability";

function App() {
  return (
    <>
    <Router>
      <div className="overflow-hidden">
      <div className="absolute z-1">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" />
        <Route path="/BusinessMomentum" element={<FinancialPage />} />
        <Route path="/sustainability" element={<Sustaunability />} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
