import React, { Component } from "react";
import data from "../data/DALI_Data.json";
import UserSnippet from './UserSnippet.js'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
    };
  }

  render() {
    let members = this.state.items;
    return (
      <div className=".homescreen">
        {members.map((member, index) => (
          <UserSnippet
            key={index}
            name={member.name}
            birthday={member.birthday}
            quote={member.quote}
            picture={member.picture}
            role={member.role}
            home={member.home}
          />
        ))}
      </div>
    );
  }
}


export default HomeScreen;