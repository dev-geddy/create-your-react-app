import React from 'react'
import pictures from '../sampleData/pictures'
import './Pictures.css'

const RenderPictures = (picturesList) => {
  return picturesList.map((picture) => {
    return (
      <div className="Picture">
        <img src={picture.url} alt={picture.name} />
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
