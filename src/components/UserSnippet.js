import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faHome,
  faUser,
  faPenNib,
  faVideo,
  faTasks
} from "@fortawesome/free-solid-svg-icons";

class UserSnippet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setIconBasedOnRole(role){
    /* set icon based on role logic */
    let icon = 0;
    if (role.toString().includes("Developer")) {
      icon = 1;
    }

    if (role.toString().includes("Designer")) {
      icon = 2;
    }

    if (role.toString().includes("Project")) {
      icon = 3;
    }
    if (role.toString().includes("Video")) {
      icon = 4;
    }
    return icon;
  }

  render() {
    let { name, role, home, quote, picture } = this.props;
    quote = quote.toString().replace(/['"]+/g, ""); /* strip end quotes */
    let icon = this.setIconBasedOnRole(role);

    return (
      <div className="card" onClick={() => this.props.onCardClick(this.props.id)}>
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
            <div className="card-title-location">
              <FontAwesomeIcon className="marker" icon={faHome} /> {home}
            </div>
            <div className="card-title-role">
              <FontAwesomeIcon
                className="role"
                icon={icon === 1 ? faUser :
                  icon === 2 ? faPenNib :
                    icon === 3 ? faTasks :
                      faVideo}
              /> {role}
            </div>
          </div>
        </header>
        <section className="card-section">
          {quote ? (
            <div className="card-section-quote">
              <FontAwesomeIcon icon={faQuoteLeft} />{" "} {quote}  {" "}
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
          ) : null}
        </section>
      </div>
    );
  }
}
export default UserSnippet;
