import React from "react";
import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import Home from './pages/Home';
import ContactWithMe from './pages/ContactWithMe';
import Projects  from './pages/Projects';
import Navbar from './components/Navbar';

function App() {

  return (
    <main>
      <GlobalStyle/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactWithMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
