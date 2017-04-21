import React, {Component} from 'react';

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
              <li><a>Home</a></li>
              <li><a>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;