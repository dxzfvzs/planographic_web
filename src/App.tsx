import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "./pages/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Polygraphy from "./pages/polygraphy";
import Technology from "./pages/technology";
import Materials from "./pages/materials";
import Czech from "./pages/czech";
import English from "./pages/english";
import Hero from "./components/hero/hero";


function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header/>
      {isHome && <Hero/>}

      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/polygraphy" element={<Polygraphy/>}/>
          <Route path="/technology" element={<Technology/>}/>
          <Route path="/materials" element={<Materials/>}/>
          <Route path="/english" element={<English/>}/>
          <Route path="/czech" element={<Czech/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
