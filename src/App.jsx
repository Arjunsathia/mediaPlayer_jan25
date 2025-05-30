import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./bootstrap.min.css"

// 
function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/log" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/his" element={<History />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
