import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import menuItems from '../sampleData/menuItems';

class Header extends Component {
  renderMenuItems(menuItems) {
    return menuItems.map((menuItem, index) => {
      const addProps = {
        to: menuItem.to,
        exact: menuItem.exact
      };
      return (
        <li key={index}>
          <NavLink className="menu-item"
                   activeClassName="menu-itm--current"
                   {...addProps}>{menuItem.caption}</NavLink>
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
