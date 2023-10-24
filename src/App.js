import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index.js';
import Person from './pages/photo/index.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo/:id" element={<Person />} />
      </Routes>
    </Router>
  );
}

export default App;

