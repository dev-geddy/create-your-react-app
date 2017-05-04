import React, {Component} from 'react'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route} from 'react-router-dom'
// "npm install --save react-router-dom" - installs latest version of React Router

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <section className="app-body">
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
          </section>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
