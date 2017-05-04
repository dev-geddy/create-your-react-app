import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  menuItems = [
    {
      to: '/',
      caption: 'Home',
      exact: true
    },
    {
      to: '/contact',
      caption: 'Contact'
    }
  ];

  renderMenuItems(menuItems) {
    return menuItems.map((menuItem, index) => {
      return (
        <li key={index}>
          <NavLink to={menuItem.to}
                   className="menu-item"
                   exact={menuItem.exact ? true : false}
                   activeClassName="menu-itm--current">{menuItem.caption}</NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <header className="app-header">
        <div className="app-content-width">
          <h1>
            My React Site
          </h1>
          <nav className="app-header-menu">
            <ul>
              {this.renderMenuItems(this.menuItems)}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
