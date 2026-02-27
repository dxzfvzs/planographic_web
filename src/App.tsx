import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "./pages/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SubjectPage from "./pages/subject-page";
import Hero from "./components/hero/hero";
import ArticlePage from "./pages/article-page";

function App() {
  const location = useLocation();
  const currentCore = location.pathname.split("/")[1];

  return (
    <>
      <Header/>
      <Hero currentCore={currentCore}/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/:subjectSlug" element={<SubjectPage />}/>
          <Route path="/:subjectSlug/:sectionSlug/:articleSlug" element={
            <ArticlePage/>
          }/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
