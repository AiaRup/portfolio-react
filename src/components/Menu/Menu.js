import React, { Component } from 'react';
import '../../stylesheets/main.scss';
import './Menu.scss';
import { Link } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const navClass = this.state.isOpen ? 'open' : '';
    return (
      <nav className={`page__nav ${navClass}`}>
        <div className="menu__icon-container" onClick={this.toggleMenu}>
          <div className="nav__icon">
            <div className="icon__bars" />
          </div>
        </div>
        {this.state.isOpen && (
          <ul className="menu__sidebar">
            <li className="menu__item">
              <Link className="menu__link" to="/home" onClick={this.toggleMenu}>
                Home
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/about" onClick={this.toggleMenu}>
                About
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/projects" onClick={this.toggleMenu}>
                Projects
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/skills" onClick={this.toggleMenu}>
                Skills
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/contact" onClick={this.toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

export default Menu;
