import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import pictures from '../sampleData/pictures'
import './Picture.css'

class Picture extends Component {
  render() {
    const {pictureIndex} = this.props.match.params
    return (
      <div className="app-content-width">
        <article>
          <h2>Picture details</h2>
          <h3>{pictures[pictureIndex].name}</h3>
          <p>It is only about a single picture. Go back to <Link to="/pictures">gallery</Link></p>
          <div>
            <img src={pictures[pictureIndex].url} alt="Nice one"/>
          </div>
        </article>
      </div>
    )
  }
}

export default Picture
