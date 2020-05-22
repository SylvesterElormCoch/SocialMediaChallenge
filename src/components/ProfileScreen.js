import React, { Component } from "react";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.currentProfile);
  }

  openFavorites(evt) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with className="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with className="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(evt.target.value).style.display = "block";
    evt.currentTarget.className += " active";

    console.log();
  }

  render() {
    let { name, picture, role, favoriteColor, favoriteArtist, favoriteShoe } = this.props.currentProfile;
    return (
      <div className="profile-container">
        <div className="profile-head-background">
          <div className="profile-head-image-wrapper">
            <img className="profile-head-image" src={picture} alt={name} />
          </div>
        </div>
        <div className="profile-username-section">
          <h3 className="profile-username">{this.props.currentProfile.name}</h3>
          <div className="profile-role">{role}</div>
        </div>
        <section>
          <div className="tab">
            <button className="tablinks" value="favoriteShoe" onMouseOver={this.openFavorites}>
              Favorite Shoe
            </button>
            <button className="tablinks" value="favoriteArtist" onMouseOver={this.openFavorites}>
              Favorite Artist
            </button>
            <button className="tablinks" value="favoriteColor" onMouseOver={this.openFavorites}>
              Favorite Color
            </button>
          </div>

          <div id="favoriteShoe" className="tabcontent">
            <h3> My favorite Shoe is ...</h3>
            <p>{favoriteShoe}</p>
          </div>

          <div id="favoriteColor" className="tabcontent">
            <h3>My favorite Color is ...</h3>
            <p>{favoriteColor}</p>
          </div>

          <div id="favoriteArtist" className="tabcontent">
            <h3>My favorite Artist is ...</h3>
            <p>{favoriteArtist}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default ProfileScreen;
