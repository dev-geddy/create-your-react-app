import React, {Component} from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="app-content-width">
          <h1>
            My React Site
          </h1>
          <nav className="app-header-menu">
            <ul>
              <li><NavLink exact to="/" className="menu-item" activeClassName="menu-itm--current">Home</NavLink></li>
              <li><NavLink to="/contact" className="menu-item" activeClassName="menu-item--current">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;