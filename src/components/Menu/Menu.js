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
            <li className="menu__item">
              {this.hightlightActiveLink('/home', 'Home')}
              {/* <Link className="menu__link" to="/home" onClick={this.toggleMenu}>
                Home
              </Link> */}
            </li>
            <li className="menu__item">
              {this.hightlightActiveLink('/about', 'About')}
              {/* <Link className="menu__link" to="/about" onClick={this.toggleMenu}>
                About
              </Link> */}
            </li>
            <li className="menu__item">
              {this.hightlightActiveLink('/projects', 'Projects')}
              {/* <Link className="menu__link" to="/projects" onClick={this.toggleMenu}>
                Projects
              </Link> */}
            </li>
            <li className="menu__item">
              {this.hightlightActiveLink('/skills', 'Skills')}
              {/* <Link className="menu__link" to="/skills" onClick={this.toggleMenu}>
                Skills
              </Link> */}
            </li>
            <li className="menu__item">
              {this.hightlightActiveLink('/contact', 'Contact')}
              {/* <Link className="menu__link" to="/contact" onClick={this.toggleMenu}>
                Contact
              </Link> */}
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

export default Menu;
