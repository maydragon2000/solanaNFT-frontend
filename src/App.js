import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import './App.css';
import Campus from "./pages/Campus/Campus";
import Staking from "./pages/Staking/Staking";
import Marketplace from "./pages/Marketplace/Marketplace";
import BeerPong from "./pages/BeerPong/BeerPong";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/campus" element={<Campus />} />
            <Route exact path="/staking" element={<Staking />} />
            <Route exact path="/marketplace" element={<Marketplace />} />
            <Route exact path="/beerpong" element={<BeerPong />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
