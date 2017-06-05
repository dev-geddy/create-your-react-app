import React from 'react'
import {Link} from 'react-router-dom'
import pictures from '../sampleData/pictures'
import './Pictures.css'

const RenderPictures = (picturesList) => {
  return picturesList.map((picture, index) => {
    return (
      <div className="Picture" key={`MyPicture_${index}`}>
        <img src={picture.url} alt={picture.name}/>
        <div className="Picture-name">{picture.name}</div>
        <div className="Picture-details-link">
          <Link to={`/picture/${index}`}>{picture.name} &raquo;</Link>
        </div>
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
