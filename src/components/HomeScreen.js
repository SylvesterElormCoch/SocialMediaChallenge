import React, { Component } from "react";
import data from "../data/DALI_Data.json";

function UserSnippet(props) {
  const { name, birthday, home, quote } = props;

  return (

    <div className="card">
      <header className="card-title">
        <div className="card-title-img"></div>
        <div className="card-title-info">
          <div className="card-title-username">{name}</div>
          <div className="card-title-location">{home}</div>
        </div>
      </header>
      <section className="card-section">
        <div className="card-section-quote">{quote}</div>
      </section>
      <footer className="card-section-footer">
        <span>{birthday}</span>
      </footer>
    </div>
  );
}

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data
    };
  }



  render() {
    let members = this.state.items;
    return (
      <div className=".homescreen">
        {members.map((member, index) =>
          <UserSnippet
            key={index}
            name={member.name}
            birthday={member.birthday}
            quote={member.quote}
            picture={member.picture}
            role={member.role}
          />
        )
        }
      </div>
    );
  }
}
