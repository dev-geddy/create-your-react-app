import React, {Component} from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="App-body">
          <div className="App-content-width">
            <article>
              <h2>Home</h2>
              <p>Hello people, let's build the React application!</p>
            </article>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
