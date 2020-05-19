import React from 'react';
import Navbar from './layouts/Navbar.js'
import HomeScreen from './components/HomeScreen'

function App() {
  return (
    <div className="Container">
      <Navbar/>
      <HomeScreen/>
    </div>
  );
}

export default App;
