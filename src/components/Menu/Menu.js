import React, { Component } from 'react';
import '../../stylesheets/main.scss';
import './Menu.scss';
import { Link, Route } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  hightlightActiveLink(route, text) {
    return (
      <Route
        path={route}
        children={({ match, history, location }) => {
          const activeClass = !!match && match.isExact ? 'menu__link active' : 'menu__link';
          return (
            <Link to={route} className={activeClass} onClick={this.toggleMenu}>
              {text}
            </Link>
          );
        }}
      />
    );
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
            <li className="menu__item">{this.hightlightActiveLink('/home', 'Home')}</li>
            <li className="menu__item">{this.hightlightActiveLink('/about', 'About')}</li>
            <li className="menu__item">{this.hightlightActiveLink('/projects', 'Projects')}</li>
            <li className="menu__item">{this.hightlightActiveLink('/skills', 'Skills')}</li>
            <li className="menu__item">{this.hightlightActiveLink('/contact', 'Contact')}</li>
          </ul>
        )}
      </nav>
    );
  }
}

export default Menu;
