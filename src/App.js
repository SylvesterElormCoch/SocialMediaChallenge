import React, { Component } from "react";
import data from "./data/DALI_Data.json";
import Navbar from "./layouts/Navbar.js";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      onExplorePage: true,
    };

    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick(key) {
    this.setState(state => ({
      onExplorePage: !state.onExplorePage,
      currentProfile: key
    }));

    console.log("card clicked at " + key);
  }


  render() {
    let { data , currentProfile} = this.state;
    return (
      <div className="Container">
        <Navbar />
        {this.state.onExplorePage ? (
          <HomeScreen
            data={this.state.data}
            onExplorePage={this.state.OnExplorePage}
            onCardClick={this.onCardClick}
          />
        ) : (
          <ProfileScreen currentProfile={data[currentProfile]} />
        )}
      </div>
    );
  }
}

export default App;
