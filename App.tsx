import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { WorkGrid } from './components/WorkGrid';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WorkGrid />
      <div id="services-section">
        <Services />
      </div>
      <About />
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={
            <div className="pt-20">
                <WorkGrid />
            </div>
        } />
        <Route path="*" element={
            <div className="h-screen flex items-center justify-center flex-col bg-slate-950 text-white">
                <h1 className="text-6xl font-display mb-4">404</h1>
                <p className="text-slate-400">Page not found.</p>
            </div>
        } />
      </Routes>
    </Layout>
  );
};

export default App;
