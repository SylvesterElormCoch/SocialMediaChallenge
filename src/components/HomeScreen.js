import React, { Component } from "react";
import UserSnippet from './UserSnippet.js'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let members = this.props.data;
    return (
      <div className=".homescreen">
        {members.map((member, index) => (
          <UserSnippet
            key={index}
            id={index}
            name={member.name}
            birthday={member.birthday}
            quote={member.quote}
            picture={member.picture}
            role={member.role}
            home={member.home}
            onCardClick={this.props.onCardClick}
          />
        ))}
      </div>
    );
  }
}


export default HomeScreen;