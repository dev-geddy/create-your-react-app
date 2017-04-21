import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <section className="App-body">
          <div className="App-content-width">
            <article>
              <h2>Home</h2>
              <p>Hello people, let's build the React application!</p>
            </article>
          </div>
        </section>
        <footer className="App-footer">
          <div className="App-content-width">
            Built to help people learn React! It's 2017 now.
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
