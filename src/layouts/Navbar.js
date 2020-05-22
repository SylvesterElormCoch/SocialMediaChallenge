import React, { Component } from "react";

function NavItem(props) {
  console.log(props)
  return (
    <li className="nav_item" onClick={() => props.onMenuClick(props.nav_item)}>
      <a className="nav_link" href={props.nav_link} >
        {props.nav_item}
      </a>
    </li>
  );
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="menu">
        <div className="title">MENU</div>
        <ul className="nav">
          <NavItem
            nav_link="#"
            nav_item="Profile"
            onMenuClick={this.props.onMenuClick}
          />
          <NavItem
            nav_link="#"
            nav_item="Explore"
            onMenuClick={this.props.onMenuClick}
          />
          <NavItem
            nav_link="#"
            nav_item="Search"
            onMenuClick={this.props.onMenuClick}
          />
          <NavItem
            nav_link="#"
            nav_item="Sign Out"
            onMenuClick={this.props.onMenuClick}
          />
          <NavItem
            nav_link="#"
            nav_item="Contact"
            onMenuClick={this.props.onMenuClick}
          />
        </ul>
      </div>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
