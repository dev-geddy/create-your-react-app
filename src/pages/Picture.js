import React, {Component} from 'react'
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
          <p>It's only about a single picture.</p>
          <div>
            <img src={pictures[pictureIndex].url} alt="Nice one"/>
          </div>
        </article>
      </div>
    )
  }
}

export default Picture
