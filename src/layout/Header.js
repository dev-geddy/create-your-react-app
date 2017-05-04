import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import menuItems from '../sampleData/menuItems';

class Header extends Component {
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
              {this.renderMenuItems(menuItems)}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
