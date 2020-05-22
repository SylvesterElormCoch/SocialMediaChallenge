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
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onCardClick(key) {
    this.setState(state => ({
      onExplorePage: !state.onExplorePage,
      currentProfile: key
    }));

    console.log("card clicked at " + key);
  }

  onMenuClick(menu){
    if (menu.toString() === "Explore"){
        if (!this.state.onExplorePage){
          this.setState(state => ({
            onExplorePage: !state.onExplorePage,
          }));
          console.log("Menu clicked Awwo at " + menu);
        }
    }else if (menu.toString === "Sign Out"){
        console.log("Menu clicked at " + menu);
    }
    console.log("Menu clicked at " + menu);
  }


  render() {
    let { data, currentProfile} = this.state;
    return (
      <div className="Container">
        <Navbar onMenuClick={this.onMenuClick} />
        {this.state.onExplorePage ? (
          <HomeScreen
            data={this.state.data}
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
