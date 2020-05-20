import React, { Component } from 'react'

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.currentProfile)
  }

  render() {
    return (
      <div>
        Hello ProfileScreen{this.props.currentProfile.name}
      </div>
    )
  }
}

export default ProfileScreen;
