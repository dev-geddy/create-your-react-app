import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            My React Site
          </h1>
          <nav>
            <ul>
              <li><a>Home</a></li>
              <li><a>Contact</a></li>
            </ul>
          </nav>
        </header>
        <section className="App-body">
          <article>
            <h2>Home</h2>
            <p>Hello people, let's build the React application!</p>
          </article>
        </section>
        <footer className="App-footer">
          Built to help people learn React! It's 2017 now.
        </footer>
      </div>
    );
  }
}

export default App;
