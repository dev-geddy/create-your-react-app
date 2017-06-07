import React from 'react'
import {Link} from 'react-router-dom'
import pictures from '../sampleData/pictures'
import './Pictures.css'

const RenderPictures = (picturesList) => {
  return picturesList.map((picture, index) => {
    return (
      <div className="Picture" key={`MyPicture_${index}`}>
        <Link to={`/picture/${index}`}>
          <img src={picture.url} alt={picture.name}/>
        </Link>
        <div className="Picture-name">{picture.name}</div>
      </div>
    )
  })
}

const Pictures = () => {
  return {
    render: () => {
      return (
        <div className="app-content-width">
          <article>
            <h2>Pictures</h2>
            <p>Simple picture gallery.</p>
            <div className="Pictures-gallery">{RenderPictures(pictures)}</div>
          </article>
        </div>
      )
    }
  }
}

export default Pictures
