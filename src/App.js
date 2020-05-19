import React, {Component} from 'react';
import Navbar from './layouts/Navbar.js'
import HomeScreen from './components/HomeScreen'

class App extends Component {
  render(){
    return (
      <div className="Container">
        <Navbar/>
        <HomeScreen/>
      </div>
    );
  }

}

export default App;
