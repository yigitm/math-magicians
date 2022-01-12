import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Footer from './components/Footer';
import Error from './components/Error';

const App = () => {
  return (
    <Router>
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
