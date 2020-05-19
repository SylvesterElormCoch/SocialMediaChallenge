import React, { Component } from "react";


function NavItem(props) {
  return (
    <li className="nav_item">
        <a className="nav_link" href={props.nav_link}>{props.nav_item}</a>
    </li>
  )
}

class Navbar extends Component {
  render() {
    return (
        <div className="menu">
          <div className="title">MENU</div>
          <ul className="nav">
              <NavItem nav_link="#" nav_item="Profile"/>
              <NavItem nav_link="#" nav_item="Explore"/>
              <NavItem nav_link="#" nav_item="Search"/>
              <NavItem nav_link="#" nav_item="Sign Out"/>
              <NavItem nav_link="#" nav_item="Contact"/>
          </ul>
        </div>
    );
  }
}




Navbar.propTypes = {};

export default Navbar;
