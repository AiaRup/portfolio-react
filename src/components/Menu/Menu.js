import React, { Component } from 'react';
import '../../stylesheets/main.scss';
import './Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <nav className="page__nav">
        <div className="menu__icon-container" onClick={this.toggleMenu}>
          <div className="nav__icon">
            <div className="icon__bars" />
          </div>
        </div>
        {this.state.isOpen && (
          <ul class="menu__sidbar">
            <li>
              <a href="#page__projects">Work</a>
            </li>
            <li>
              <a href="#page__about">About</a>
            </li>
            <li>
              <a href="#page__contact">Contact</a>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

export default Menu;
