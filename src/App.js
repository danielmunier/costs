import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Company from './pages/Company'
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Container from './layout/Container';
import Home from './pages/Home';
import NewProject from './pages/NewProject';

function App() {
  return (
    <Router>

      <Navbar />
      <Container customClass="min-height">
      <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/projects" element={<Projects/>}></Route>
          <Route exact path="/company" element={<Company/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/newproject" element={<NewProject/>}></Route>

      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
