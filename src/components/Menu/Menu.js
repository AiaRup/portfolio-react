import React, { Component } from 'react';
import '../../stylesheets/main.scss';
import './Menu.scss';
// import { Link, Route } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

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
              <NavLink smooth to="/AiaRupsom#home" activeClassName="menu__link active" className="menu__link" location={{ pathname: document.location.pathname + document.location.hash }} onClick={this.toggleMenu}>
                home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink smooth to="/AiaRupsom#about" activeClassName="menu__link active" className="menu__link" location={{ pathname: document.location.pathname + document.location.hash }} onClick={this.toggleMenu}>
                about
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink smooth to="/AiaRupsom#projects" activeClassName="menu__link active" className="menu__link" location={{ pathname: document.location.pathname + document.location.hash }} onClick={this.toggleMenu}>
                projects
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink smooth to="/AiaRupsom#skills" activeClassName="menu__link active" className="menu__link" location={{ pathname: document.location.pathname + document.location.hash }} onClick={this.toggleMenu}>
                skills
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink smooth to="/AiaRupsom#contact" activeClassName="menu__link active" className="menu__link" location={{ pathname: document.location.pathname + document.location.hash }} onClick={this.toggleMenu}>
                contact
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

export default Menu;
