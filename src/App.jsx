import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar'; 
import MainContent from './Components/MainContent'; 
//import AirportDetails from './components/AirportDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="app-screen">
          <Sidebar />
          <div className='routes'>
            <Routes>
              <Route path="/MainContent" element={<MainContent />} />
            
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;