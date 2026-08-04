import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact-Us";
import Forms from "./pages/Forms";
import ReserveFundStudy from "./pages/Reserve-Fund-Study";
import Budget from "./pages/Budgets"
import InsuranceCertificate from "./pages/Insurance-Certificate";
import AGMMinutes from "./pages/AGM-Minutes";
import VisitorParking from "./pages/Visitor-Parking-Registration";
import Bylaw1 from "./pages/GoverningDocuments/Bylaw1";
import Bylaw2 from "./pages/GoverningDocuments/Bylaw2";
import Bylaw3 from "./pages/GoverningDocuments/Bylaw3";
import Bylaw4 from "./pages/GoverningDocuments/Bylaw4";
import Bylaw5 from "./pages/GoverningDocuments/Bylaw5";
import Declaration from "./pages/GoverningDocuments/Declaration";
import RulesRegulations from "./pages/GoverningDocuments/RulesRegulations";
import WinterParkingBanRule from "./pages/GoverningDocuments/WinterParkingBanRule";
import ShortTermTenancies from "./pages/GoverningDocuments/ShortTermTenancies";
import Newsletter from "./pages/Newsletter";
import Admin from "./pages/Admin/Admin";
import Vehicles from "./pages/Admin/Vehicles";
import Login from "./pages/Admin/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Forms" element={<Forms />} />
        <Route path="/ReserveFundStudy" element={<ReserveFundStudy/>} />
        <Route path="/Budget" element={<Budget/>} />
        <Route path="/Insurance-Certificate" element={<InsuranceCertificate/>} />
        <Route path="/AGM-Minutes" element={<AGMMinutes/>} />
        <Route path="/Visitor-Parking-Registration" element={<VisitorParking />} />
        <Route path="/Bylaw1" element={<Bylaw1 />} />
        <Route path="/Bylaw2" element={<Bylaw2 />} />
        <Route path="/Bylaw3" element={<Bylaw3 />} />
        <Route path="/Bylaw4" element={<Bylaw4 />} />
        <Route path="/Bylaw5" element={<Bylaw5 />} />
        <Route path="/Declaration" element={<Declaration />} />
        <Route path="/Rules-Regulations" element={<RulesRegulations />} />
        <Route path="/Winter-Parking-Ban-Rule" element={<WinterParkingBanRule />} />
        <Route path="/Short-Term-Tenancies-Rule" element={<ShortTermTenancies />} />
        <Route path="/Newsletter" element={<Newsletter />} />
        <Route path="/Admin" element={<ProtectedRoute> <Admin /> </ProtectedRoute>} />
        <Route path="/Vehicles" element={<ProtectedRoute> <Vehicles /> </ProtectedRoute>} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
