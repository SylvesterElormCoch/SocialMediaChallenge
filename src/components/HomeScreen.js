import React, { Component } from "react";
import data from "../data/DALI_Data.json";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faMapMarker} from '@fortawesome/free-solid-svg-icons'



function UserSnippet(props) {
  let { name, birthday, home, quote, picture } = props;

  /* strip end quotes */
  quote =  quote.toString().replace(/['"]+/g, '');

  console.log(home)
  return (
    <div className="card">
      <header className="card-title">
        <div className="card-title-img-contaier">
          <img
            className="card-title-img"
            src={picture}
            alt={`${name}'s Profile Pic`}
          ></img>
        </div>
        <div className="card-title-info">
          <div className="card-title-username">{name}</div>
          <div className="card-title-location"><FontAwesomeIcon className="marker" icon={faMapMarker}/> {home} </div>
        </div>
      </header>
      <section className="card-section">
       {quote ?  <div className="card-section-quote">
         <FontAwesomeIcon icon={faQuoteLeft}/> {quote} <FontAwesomeIcon icon={faQuoteRight}/>  </div>
       : null}
      </section>
      <footer className="card-section-footer">
        <span> {birthday} </span>
      </footer>
    </div>
  );
}

export default class HomeScreen extends Component {
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
