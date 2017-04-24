import React, {Component} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-content-width">
          <h1>
            My React Site
          </h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;