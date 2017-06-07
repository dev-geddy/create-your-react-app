import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {likePicture} from '../actions/appActions'
import './Pictures.css'

export class Pictures extends Component {

  onLike = (index, event) => {
    event.preventDefault()
    this.props.onLikePicture(index)
  }

  renderPictures(picturesList) {

    return picturesList.map((picture, index) => {
      return (
        <div className="Picture" key={`MyPicture_${index}`}>
          <Link to={`/picture/${index}`}>
            <img src={picture.url} alt={picture.name}/>
          </Link>
          <div className="Picture-name">{picture.name}</div>
          <div className="Picture-like">
            {index !== this.props.liked
              ? <button onClick={this.onLike.bind(this, index)}>Like</button>
              : <span>Liked! This is my favourite now.</span>
            }
          </div>
        </div>
      )
    })
  }

  render() {
    const { pictures } = this.props
    return (
      <div className="app-content-width">
        <article>
          <h2>Pictures</h2>
          <p>Simple picture gallery. Last like index: {this.props.liked}</p>
          <div className="Pictures-gallery">
            {this.renderPictures(pictures)}
          </div>
        </article>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  liked: state.appReducer.liked,
  pictures: state.appReducer.pictures
})

const mapDispatchToProps = (dispatch) => ({
  onLikePicture: (pictureIndex) => {
    dispatch(likePicture(pictureIndex))
  }
})

const ConnectedPictures = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pictures)

export default ConnectedPictures
